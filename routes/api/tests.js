const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/tests");
const { isValidId } = require("../../middlewares/index");
const { validateBody } = require("../../middlewares/index");
const schemas = require("../../models/test");
const { authentificate } = require("../../middlewares/index");

router
  .get("/", authentificate, ctrl.getAll)
  .get("/:id", authentificate, isValidId, ctrl.getById)
  .patch(
    "/:id/completed",
    authentificate,
    isValidId,
    validateBody(schemas.updateCompletedSchema),
    ctrl.updateCompleted
  );

module.exports = router;
