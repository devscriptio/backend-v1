const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");

function startTools(app) {
  app.use(function (req, res, next) {
    app.use(express.json());
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use(morgan("tiny"));
  app.use(helmet());
}
module.exports = startTools;
