import { jest } from "@jest/globals";

import GeoCodingController, {
  getMapBoxLocation,
  getHereLocation,
  getOpenCageLocation,
} from "./GeoCodingController.js";

const redisDb = {
  Kuopio: '{"lat": 27.678281, "lng": 62.897701}',
};
const geocodeDb = {
  Helsinki: { lat: 27.678281, lng: 62.897701 },
};

let callEndpoint, mockRedis, mockGeocodeFunction;

beforeEach(() => {
  const mockApp = {
    get: jest.fn(),
  };
  mockRedis = {
    getAsync: jest.fn((address) => Promise.resolve(redisDb[address])),
    set: jest.fn(),
  };
  mockGeocodeFunction = jest.fn((address) =>
    Promise.resolve(geocodeDb[address] || { lat: null, lng: null })
  );
  GeoCodingController(mockApp, mockRedis, [mockGeocodeFunction]);

  expect(mockApp.get.mock.calls.length).toBe(1);
  const path = mockApp.get.mock.calls[0][0];
  expect(path).toBe("/geocode");
  callEndpoint = mockApp.get.mock.calls[0][1];
});

test("Test case where value is in redis", async () => {
  const end = jest.fn();
  const json = jest.fn();
  await callEndpoint({ query: { address: "Kuopio" } }, { end, json });

  expect(mockRedis.getAsync.mock.calls.length).toBe(1);
  expect(mockRedis.getAsync.mock.calls[0][0]).toBe("Kuopio");

  expect(json.mock.calls.length).toBe(1);
  expect(json.mock.calls[0][0]).toMatchSnapshot();
});

test("Test case where value is not in redis", async () => {
  const end = jest.fn();
  const json = jest.fn();
  await callEndpoint({ query: { address: "Helsinki" } }, { end, json });

  expect(mockRedis.getAsync.mock.calls.length).toBe(1);
  expect(mockRedis.getAsync.mock.calls[0][0]).toBe("Helsinki");

  expect(mockGeocodeFunction.mock.calls.length).toBe(1);
  expect(mockGeocodeFunction.mock.calls[0][0]).toBe("Helsinki");

  expect(mockRedis.set.mock.calls.length).toBe(1);
  expect(mockRedis.set.mock.calls[0][0]).toBe("Helsinki");

  expect(json.mock.calls.length).toBe(1);
  expect(json.mock.calls[0][0]).toMatchSnapshot();
});

test("Test case where value not found at all", async () => {
  const end = jest.fn();
  const json = jest.fn();
  const status = jest.fn(() => ({
    end,
  }));
  await callEndpoint(
    { query: { address: "Unknown Address" } },
    { status, end, json }
  );

  expect(status.mock.calls.length).toBe(1);
  expect(status.mock.calls[0][0]).toBe(404);
  expect(end.mock.calls.length).toBe(1);
});

test("Test mapbox url", async () => {
  getMapBoxLocation("Address 123, Country", {
    get: (...params) => {
      expect(params).toStrictEqual([
        `https://api.mapbox.com/geocoding/v5/mapbox.places/Address 123, Country.json?access_token=${process.env.MAPBOX_API_KEY}`,
      ]);
    },
  });
});
