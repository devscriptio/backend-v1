const mongoose = require("mongoose");
const { userModel } = require("../models/user");
//model creation
const User = mongoose.model("User", userModel);

//get all users
async function getUsers() {
  return await User.find();
}
//get one user by its id
async function getUser(id) {
  const result = await User.findById(id);
  if (!result) return;
  return result;
}
//add user
async function addUser(_user) {
  const user = new User({
    userName: _user.userName,
    email: _user.email,
    password: _user.password,
  });
  return await user.save();
}
//export all the database dependancies
module.exports = {
  getUser,
  getUsers,
  addUser,
};
