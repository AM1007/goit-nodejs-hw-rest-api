const { Contact } = require("../../models/contact");

const add = async (req, res) => {
  const { id } = req.user;
  const result = await Contact.create({ ...req.body, owner: id });
  res.status(201).json(result);
};

module.exports = add;
