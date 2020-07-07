const _article = require("../routes/article");
const _user = require("../routes/user");

module.exports = function (app) {
  app.use("/api/articles", _article);
  app.use("/api/users/", _user);
};
