const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/tests");

const { HttpError } = require("../../helpers/index");

const tests = require("../../models/test");

router.get("/", ctrl.getAll);

module.exports = router;
