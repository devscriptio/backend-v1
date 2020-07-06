const mongoose = require("mongoose");
const winston = require("winston");
const debug = require("debug")("app:database");

function connectDataBase() {
  mongoose
    .connect("mongodb://localhost/devScript-database", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      debug(`Database Connected..!!`);
    });
}
module.exports = connectDataBase;
