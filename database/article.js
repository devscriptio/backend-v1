const mongoose = require("mongoose");
//import schema
const { articleSchema } = require("../models/article");
//prepare model to talk to database
const Article = mongoose.model("Article", articleSchema);

//get all articles in the database
async function getArticles() {
  return await Article.find();
}
//get article by id
async function getArticle(id) {
  const _article = await Article.findById(id);
  if (!_article) return;
  return _article;
}
//store a new article into database
async function addArticle(_newArticle) {
  const article = new Article({
    title: _newArticle.title,
  });
  return await article.save();
}

module.exports = {
  getArticles,
  getArticle,
  addArticle,
};
