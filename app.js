const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

const { testsRouter } = require("./routes/api/index");
const { authRouter } = require("./routes/api/index");

const app = express();

dotenv.config();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/tests", testsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json(message);
});

module.exports = app;
