const express = require("express");

const router = express.Router();

const { validateBody } = require("../../middlewares/index");
const {
  user: { schemas },
} = require("../../models/index");

const { auth: ctrl } = require("../../controllers");
const { authenticate } = require("../../middlewares/index");

router
  .post("/register", validateBody(schemas.registerSchema), ctrl.register)
  .post("/login", validateBody(schemas.loginSchema), ctrl.login)
  .get("/current", authenticate, ctrl.getCurrent)
  .post("/logout", authenticate, ctrl.logout);

module.exports = router;
