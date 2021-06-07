import axios from "axios";
import querystring from "querystring";

const { HERE_API_KEY, MAPBOX_API_KEY, OPENCAGE_API_KEY } = process.env;

export const getMapBoxLocation = async (address, axios) => {
  const response = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?` +
      querystring.stringify({ access_token: MAPBOX_API_KEY })
  );
  const [lng, lat] = response.data?.features?.[0]?.center || [null, null];
  return { lng, lat };
};

export const getHereLocation = async (address, axios) => {
  const response = await axios.get(
    `https://geocode.search.hereapi.com/v1/geocode?` +
      querystring.stringify({ q: address, apiKey: HERE_API_KEY })
  );
  return response.data?.items?.[0].position || { lat: null, lng: null };
};

export const getOpenCageLocation = async (address, axios) => {
  const response = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?` +
      querystring.stringify({ q: address, key: OPENCAGE_API_KEY })
  );
  return response.data?.results?.[0]?.geometry || { lat: null, lng: null };
};

export const ALL_GEOCODE_FUNCTIONS = [
  getMapBoxLocation,
  getHereLocation,
  getOpenCageLocation,
].map(
  (fn) =>
    (...params) =>
      fn(...params, axios)
);

export default (app, redis, geoCodeFunctions) => {
  app.get("/geocode", async (req, res) => {
    console.time("geocode");
    const { address } = req.query;

    const oldValue = await redis.getAsync(address);
    if (oldValue) {
      console.timeEnd("geocode");
      res.json(JSON.parse(oldValue));
    } else {
      try {
        const results = (
          await Promise.allSettled(
            geoCodeFunctions.map((func) => func(address))
          )
        )
          .filter(
            ({ status, value }) =>
              status === "fulfilled" && value.lat && value.lng
          )
          .map(({ value }) => value);

        if (results?.length === 0) {
          return res.status(404).end();
        }

        const sums = results.reduce((sums, result) => ({
          lng: sums.lng + result.lng,
          lat: sums.lat + result.lat,
        }));
        const averages = Object.fromEntries(
          Object.entries(sums).map(([key, value]) => [
            key,
            value / results.length,
          ])
        );

        redis.set(address, JSON.stringify(averages), "EX", 30);
        console.timeEnd("geocode");
        res.json(averages);
      } catch (error) {
        console.error(error);

        res.end();
      }
    }
  });
};
