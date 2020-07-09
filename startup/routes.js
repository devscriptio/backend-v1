const _article = require("../routes/article");
const _user = require("../routes/user");
const _course = require("../routes/course");
const _contributor = require("../routes/contributor");
const _video = require("../routes/video");
const _topic = require("../routes/topic");
const _subject = require("../routes/subject");

module.exports = function (app) {
  app.use("/api/articles", _article);
  app.use("/api/users", _user);
  app.use("/api/courses", _course);
  app.use("/api/contributors", _contributor);
  app.use("/api/videos", _video);
  app.use("/api/topics", _topic);
  app.use("/api/subjects", _subject);
};
