const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  publishDate: Date.now(),
  externalLinks: [],
  likes: {
    type: Number,
    default: 0,
  },
  disLikes: {
    type: Number,
    default: 0,
  },
  suggestedVideo: [],
});

function validateTopic(_topic) {
  const _schema = joi.object({
    title: joi.string().required(),
    publishDate: joi.date(),
    externalLinks: joi.array(),
    likes: joi.number(),
    disLikes: joi.number(),
    suggestedVideo: joi.array(),
  });
  return _schema.validate(_topic);
}
module.exports = {
  topicSchema,
  validateTopic,
};
