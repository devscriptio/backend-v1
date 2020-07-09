const express = require("express");
const { getSubjects, getSubject, addSubject } = require("../database/subject");
const { validateSubject } = require("../models/subject");
const Router = express.Router();
//get all subjects
Router.get("/", async (req, res) => {
  try {
    const _subjects = await getSubjects();
    if (_subjects.length === 0) return res.send(["No Subject Found"]);
    return res.send(_subjects);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
//get subject by its id
Router.get("/:id", async (req, res) => {
  try {
    const _subject = await getSubject(req.params.id);
    if (!_subject) return res.status(404).send("Item Not Found");
    return res.send(_subject);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
//add one subject
Router.post("/", async (req, res) => {
  const { error } = validateSubject(req.body);
  if (error) return res.status(400).send(error.message);
  try {
    const _subject = await addSubject(req.body);
    if (!_subject) return res.status(400).send("Server Error..!!");
    return res.send(_subject);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = Router;
