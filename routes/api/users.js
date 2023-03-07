const express = require("express");

const { users: ctrl } = require("../../controllers");

const { ctrlWrapper } = require("../../helpers");

const { validation, authenticate } = require("../../middlewares");

const { joiSignupSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(joiSignupSchema), ctrlWrapper(ctrl.signup));
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

module.exports = router;
