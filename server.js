const express = require("express");
const cors = require("cors");
const router = require("./routers");
const config = require("./config");
const app = express();

app.use(cors());
app.use("/api", router);

app.listen(config.port, () => {
  console.log(
    "Express server listening on %d, in %s mode",
    config.port,
    app.get("env")
  );
});

app.get("/api/", (req, res) => {
  res.send("Facgure API");
});

module.exports = app;
