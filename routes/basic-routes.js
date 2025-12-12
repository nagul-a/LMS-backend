const express = require("express");
const {
  createUser,
  createManyUsers,
  getAllUsers,
  updateEmail,
  getDetails,
  userRegister,
  getAllUserDetails,
  deleteUsers,
} = require("../apis-function/user-functions");
const router = express.Router();
router.post("/userSignup", createUser);
module.exports = router;