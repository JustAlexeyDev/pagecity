// authController.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const login = async (req, res) => {
  console.log('Request body:', req.body); // Добавьте это для отладки

  const { username, password } = req.body;

  // Проверка на наличие поля username
  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  const user = await User.findOne({ where: { username } });
  if (user && user.password === password) {
    const token = jwt.sign({ userId: user.id }, 'secret_key');
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};