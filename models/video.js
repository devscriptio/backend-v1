const mongoose = require("mongoose");
const joi = require("@hapi/joi");

const videoSchema = new mongoose.Schema({
  contributor_id: {
    type: String,
    minlength: 24,
    maxlength: 24,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
  explaination: {
    type: String,
  },
  topicsCovered: [],
});

function validateVideo(_video) {
  const _schema = joi.object({
    contributor_id: joi.string().min(24).max(24).required(0),
    title: joi.string().required(),
    videoLink: joi.string().required(),
    explaination: joi.string(),
    topicsCovered: joi.array(),
  });
  return _schema.validate(_video);
}

module.exports = {
  videoSchema,
  validateVideo,
};
