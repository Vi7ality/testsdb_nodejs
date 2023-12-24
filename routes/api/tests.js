const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/tests");
const { isValidId } = require("../../middlewares/index");
const { validateBody } = require("../../middlewares/index");
const schemas = require("../../models/test");

router.get("/", ctrl.getAll);
router.get("/:id", isValidId, ctrl.getById);
router.patch(
  "/:id/completed",
  isValidId,
  validateBody(schemas.updateCompletedSchema),
  ctrl.updateCompleted
);

module.exports = router;
