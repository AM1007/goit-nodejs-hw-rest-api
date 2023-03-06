const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { SECRET_KEY } = process.env;
const { createError } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401, "Email or password is wrong");
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw createError(401, "Email or password is wrong");
  }

  const payload = {
    id: user.id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user.id, { token });
  res.json({
    status: "success",
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = login;
