const News = require('../models/News');

const getNews = async (req, res) => {
  const news = await News.findAll();
  res.json(news);
};

module.exports = { getNews };