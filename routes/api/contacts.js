const express = require("express");

const { contacts: ctrl } = require("../../controllers");

const { ctrlWrapper } = require("../../helpers/");

const { authenticate, validation } = require("../../middlewares");

const {
  addSchema,
  schemaUpdate,
  schemaUpdateFavorite,
} = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", authenticate, validation(addSchema), ctrlWrapper(ctrl.add));

router.put(
  "/:contactId",
  validation(schemaUpdate),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  validation(schemaUpdateFavorite),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

module.exports = router;
