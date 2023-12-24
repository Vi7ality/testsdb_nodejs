const express = require("express");

const router = express.Router();

const { validateBody } = require("../../middlewares/index");
const schemas = require("../../models/user");

const ctrl = require("../../controllers/auth");
const { authenticate } = require("../../middlewares");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
