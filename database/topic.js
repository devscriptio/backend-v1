const mongoose = require("mongoose");
const { topicSchema } = require("../models/topic");

const Topic = mongoose.model("topic", topicSchema);

//get all the topics
async function getTopics() {
  return await Topic.find();
}
//get one topic by its id
async function getTopic(_id) {
  const topic = await Topic.findById(_id);
  if (!topic) return;
  return topic;
}
//add one topic
async function addTopic(_topic) {
  const newTopic = new Topic({
    title: _topic.title,
    publishDate: _topic.publishDate,
    externalLinks: _topic.externalLinks,
    likes: _topic.likes,
    disLikes: _topic.disLikes,
    suggestedVideo: _topic.suggestedVideo,
  });
  return await newTopic.save();
}

module.exports = {
  getTopic,
  getTopics,
  addTopic,
  Topic,
};
