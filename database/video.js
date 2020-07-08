const mongoose = require("mongoose");
const { videoSchema } = require("../models/video");
//model creation
const Video = mongoose.model("video", videoSchema);

//get all video
async function getVideos() {
  return await Video.find();
}
//get One Video by id
async function getVideo(_id) {
  const _video = await Video.findById(_id);
  if (!_video) return;
  return _video;
}
//addVideo
async function addVideo(_video) {
  const newVideo = new Video({
    contributor_id: _video.contributor_id,
    title: _video.title,
    videoLink: _video.videoLink,
    explaination: _video.explaination,
    topicsCovered: _video.topicsCovered,
  });
  return await newVideo.save();
}

module.exports = {
  getVideo,
  getVideos,
  addVideo,
};
