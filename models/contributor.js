const mongoose = require("mongoose");
const joi = require("@hapi/joi");

const contributorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  channelName: {
    type: String,
  },
  channelLink: {
    type: String,
  },
  subscriptionLink: {
    type: String,
  },
});

function validateContibutor(_contributor) {
  const _schema = joi.object({
    name: joi.string().required(),
    channelName: joi.string(),
    channelLink: joi.string(),
    subscriptionLink: joi.string(),
  });
  return _schema.validate(_contributor);
}

module.exports = {
  contributorSchema,
  validateContibutor,
};
