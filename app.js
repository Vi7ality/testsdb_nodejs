const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is run");
});
