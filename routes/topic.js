const express = require("express");
const { getTopics, getTopic, addTopic } = require("../database/topic");
const { validateTopic } = require("../models/topic");
const Router = express.Router();
//get all topics
Router.get("/", async (req, res) => {
  try {
    const _topics = await getTopics();
    if (_topics.length === 0)
      return res.send(["No topic Found in the DataBase"]);
    return res.send(_topics);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
//get one topic by its id
Router.get("/:id", async (req, res) => {
  try {
    const _topic = await getTopic(req.params.id);
    if (!_topic) return res.status(404).send(`Requested Topic Not Found`);
    return res.send(_topic);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
//add topic by its id
Router.post("/", async (req, res) => {
  const { error } = validateTopic(req.body);
  if (error) return res.send(400);
  try {
    const _topic = await addTopic(req.body);
    if (!_topic) return res.status(400).send("Cant store Now");
    return res.send(_topic);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = Router;
