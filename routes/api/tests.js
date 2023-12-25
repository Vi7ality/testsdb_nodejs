const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/tests");
const { isValidId } = require("../../middlewares/index");
const { validateBody } = require("../../middlewares/index");
const schemas = require("../../models/test");
const { authenticate } = require("../../middlewares/index");

router
  .get("/", authenticate, ctrl.getAllAssigned)
  .get("/all", authenticate, ctrl.getAll)
  .get("/:id", authenticate, isValidId, ctrl.getById)
  .patch(
    "/:id/completed",
    authenticate,
    isValidId,
    validateBody(schemas.updateCompletedSchema),
    ctrl.updateCompleted
  );

module.exports = router;
