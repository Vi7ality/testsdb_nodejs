const express = require("express");
const router = express.Router();
const { tests: ctrl } = require("../../controllers/index");
const { isValidId } = require("../../middlewares/index");
const { validateBody } = require("../../middlewares/index");
const {
  test: { schemas },
} = require("../../models/index");
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
