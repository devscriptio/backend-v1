const express = require("express");
const { validateCourse } = require("../models/course");
const { getCourses, getCourse, addCourse } = require("../database/course");
const Router = express.Router();

//handling get request
Router.get("/", async (req, res) => {
  try {
    const result = await getCourses();
    if (result.length === 0) return res.status(404).send(["No item Found"]);
    return res.send(result);
  } catch (err) {
    return res.status(200).send(error.message);
  }
});
//get data by its id
Router.get("/:id", async (req, res) => {
  try {
    const result = await getCourse(req.params.id);
    if (!result) return res.status(401).send(`No item Found`);
    return res.send(result);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});
//add course
Router.post("/", async (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const result = await addCourse(req.body);
    if (!result) return res.status(200).send(`Server Error..!!`);
    return res.send(result);
  } catch (error) {
    return res.status(400).send(err.message);
  }
});

module.exports = Router;
