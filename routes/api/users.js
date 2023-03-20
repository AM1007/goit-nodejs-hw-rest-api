const express = require("express");

const { users: ctrl } = require("../../controllers");

const { ctrlWrapper } = require("../../helpers");

const { validation, authenticate, upload } = require("../../middlewares");

const { joiSignupSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(joiSignupSchema), ctrlWrapper(ctrl.signup));
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
