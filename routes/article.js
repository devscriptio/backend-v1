const express = require("express");
const Router = express.Router();

const { getArticles, getArticle, addArticle } = require("../database/article");
const { validate } = require("../models/article");
//get request handler
Router.get("/", async (req, res) => {
  try {
    const result = await getArticles();
    if (result.length === 0) return res.send(["No Item Found In The Database"]);
    return res.send(result);
  } catch (err) {
    return res.status(401).send(err.message);
  }
});
//get one element by id handler
Router.get("/:id", async (req, res) => {
  try {
    const result = await getArticle(req.params.id);
    if (!result)
      return res.status(400).send(`No Article Found With Id ${req.params.id}`);
    return res.send(result);
  } catch (err) {
    return res.status(401).send(err.message);
  }
});
//post request handler
Router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const result = await addArticle(req.body);
    if (!result)
      return res.status(400).send(`Database Error can't store data now..!!`);
    return res.send(result);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = Router;
