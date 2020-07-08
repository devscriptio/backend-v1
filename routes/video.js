const express = require("express");
const { getVideos, getVideo, addVideo } = require("../database/video");
const { validateVideo } = require("../models/video");
const Router = express.Router();
//get all the videos from database
Router.get("/", async (req, res) => {
  try {
    const _videos = await getVideos();
    if (_videos.length == 0) return res.send([`No Item Found In Database`]);
    return res.send(_videos);
  } catch (error) {
    return res.status(400).send(`Server Error..!!`);
  }
});
//get video by id
Router.get("/:id", async (req, res) => {
  try {
    const _videos = await getVideo(req.params.id);
    if (!_videos)
      return res.status(404).send(`No video found with id ${req.params.id}`);
    return res.send(_videos);
  } catch (error) {
    return res.status(400).send(`Server Error..!!`);
  }
});
//add one video
Router.post("/", async (req, res) => {
  const { error } = validateVideo(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const _video = await addVideo(req.body);
    if (!_video) return res.status(401).send("Server Error");
    return res.send(_video);
  } catch (error) {
    return res.status(400).send(erorr.message);
  }
});

module.exports = Router;
