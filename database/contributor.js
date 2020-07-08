const mongoose = require("mongoose");
const { contributorSchema } = require("../models/contributor");

const Contributor = mongoose.model("Contributor", contributorSchema);

//get all the contributors
async function getContributors() {
  return await Contributor.find();
}
//get one Contributor by its id
async function getContributor(_id) {
  const _contributor = await Contributor.findById(_id);
  if (!_contributor) return;
  return _contributor;
}
//add a contributor
async function addContributor(_contributor) {
  const newContributor = new Contributor({
    name: _contributor.name,
    channelName: _contributor.channelName,
    channelLink: _contributor.channelLink,
    subscriptionLink: _contributor.subscriptionLink,
  });
  return await newContributor.save();
}

module.exports = {
  getContributor,
  getContributors,
  addContributor,
};
