const News = require('../models/News');
const Category = require('../models/Category');

const createNews = async (req, res) => {
  const { title, content, date, categoryId } = req.body;
  const media = req.file ? req.file.path : null;
  const news = await News.create({ title, content, media, date, categoryId });
  res.json(news);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await Category.create({ name });
  res.json(category);
};

module.exports = { createNews, createCategory };