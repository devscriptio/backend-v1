const mongoose = require("mongoose");
const joi = require("@hapi/joi");

const model = new mongoose.Schema({
  userName: {
    type: String,
    minlength: 3,
    maxlength: 200,
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 200,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 200,
  },
});

function validateUser(_user) {
  const schema = joi.object({
    userName: joi.string().min(3).max(200).required(),
    email: joi.string().min(5).max(200).required(),
    password: joi.string().min(8).max(200),
  });
  return schema.validate(_user);
}
