const signup = require("./signup");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerify = require("./resendVerify");

module.exports = {
  signup,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verifyEmail,
  resendVerify,
};
