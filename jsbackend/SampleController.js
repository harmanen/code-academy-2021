export default (app) => {
  app.get("/", (req, res) => {
    const {
      headers: { cookie },
      params,
      query,
    } = req;
    console.log({ cookie, params, query });
    res.setHeader("Set-Cookie", "trackerId=tosi_salainen_koodi");
    res.send("Hello World!");
  });

  app.get("/Chunks", (req, res) => {
    res.header("transfer-encoding", "chunked");
    res.set("Content-Type", "text/json");
    const interval = setInterval(() => res.write("A"), 1000);
    setTimeout(() => {
      clearInterval(interval);
      res.end();
    }, 10000);
  });

  app.get("/html", (req, res) => {
    res.send("<html></html>");
  });
};
