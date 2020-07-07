const mongoose = require("mongoose");
const joi = require("@hapi/joi");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 3,
    maxlength: 100,
  },
});

function validate(_article) {
  const schema = joi.object({
    title: joi.string().min(3).max(100).required(),
  });
  return schema.validate(_article);
}
module.exports = {
  articleSchema,
  validate,
};
