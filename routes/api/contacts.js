const express = require("express");

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers/");

const { validation } = require("../../middlewares/validation");

const {
  addSchema,
  schemaUpdate,
  schemaUpdateFavorite,
} = require("../../models/contact");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validation(addSchema), ctrlWrapper(ctrl.add));

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
