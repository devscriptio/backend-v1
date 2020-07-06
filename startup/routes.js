const _article = require("../routes/article");
module.exports = function (app) {
  app.use("/api/articles", _article);
};
