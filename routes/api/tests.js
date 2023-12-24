const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/tests");
const { isValidId } = require("../../middlewares/index");

const tests = require("../../models/test");

router.get("/", ctrl.getAll);
router.get("/:id", isValidId, ctrl.getById);
router.patch("/:id/completed", isValidId, ctrl.updateCompleted);

module.exports = router;
