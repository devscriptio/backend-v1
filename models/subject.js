const mongoose = require("mongoose");
const joi = require("@hapi/joi");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    minlength: 24,
    maxlength: 24,
    required: true,
  },
  topics: [],
  subjectTags: [],
  subjectKeywords: [],
});

function validateSubject(_subject) {
  const _schema = joi.object({
    name: joi.string().required(),
    courseId: joi.string().max(24).min(24),
    topics: joi.array(),
    subjectTags: joi.array(),
    subjectKeywords: joi.array(),
  });
  return _schema.validate(_subject);
}
module.exports = {
  subjectSchema,
  validateSubject,
};
