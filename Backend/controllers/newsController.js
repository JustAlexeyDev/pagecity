// newsController.js
import News from '../models/News.js';

export const getNews = async (req, res) => {
  const news = await News.findAll();
  res.json(news);
};