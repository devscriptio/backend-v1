const mongoose = require("mongoose");
const joi = require("@hapi/joi");
//const { string } = require("@hapi/joi");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 200,
    required: true,
  },
  isPublish: {
    type: Boolean,
    default: false,
  },
  tags: [],
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  producedBy: {
    type: String,
    minlength: 3,
    maxlength: 200,
  },
  subjects: [],
  courseDescription: {
    type: String,
    minlength: 10,
    maxlength: 1000,
  },
});

function validateCourse(_course) {
  const _schema = joi.object({
    name: joi.string().min(3).max(200).required(),
    isPublish: joi.boolean(),
    tags: joi.array(),
    rating: joi.number().min(0).max(10),
    producedBy: joi.string().min(3).max(200),
    subjects: joi.array(),
    courseDescription: joi.string().min(10).max(1000),
  });
  return _schema.validate(_course);
}

module.exports = {
  courseSchema,
  validateCourse,
};
