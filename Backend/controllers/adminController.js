// adminController.js
import News from '../models/News.js';
import Category from '../models/Category.js';

export const createNews = async (req, res) => {
  const { title, content, date, categoryId } = req.body;
  const media = req.file ? req.file.path : null;
  const news = await News.create({ title, content, date, categoryId, media });
  res.json(news);
};

export const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await Category.create({ name });
  res.json(category);
};