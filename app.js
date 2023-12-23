const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

const testsRouter = require("./routes/api/tests");

const app = express();

dotenv.config();

app.use("/api/tests", testsRouter);
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json(message);
});

module.exports = app;
