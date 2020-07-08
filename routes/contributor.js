const express = require("express");
const {
  getContributors,
  getContributor,
  addContributor,
} = require("../database/contributor");
const { validateContibutor } = require("../models/contributor");
const Router = express.Router();

//get all the Contributors
Router.get("/", async (req, res) => {
  try {
    const _contributors = await getContributors();
    if (_contributors.length == 0)
      return res.send([`No Item Found In the DataBase`]);
    return res.send(_contributors);
  } catch (error) {
    return res.status(401).send(error.message);
  }
});
//get one contributor by its id
Router.get("/:id", async (req, res) => {
  try {
    const _contributor = await getContributor(req.params.id);
    if (!_contributor)
      return res
        .status(404)
        .send(`No Contributor Found In DataBase With id ${req.params.id}`);
    return res.send(_contributor);
  } catch (error) {
    return res.status(401).send(error.message);
  }
});
//add one contributor
Router.post("/", async (req, res) => {
  const { error } = validateContibutor(req.body);
  if (error) return res.status(401).send(error.details[0].message);
  try {
    const _contributor = await addContributor(req.body);
    if (!_contributor) return res.status(400).send("Server Error..!!");
    return res.send(_contributor);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = Router;
