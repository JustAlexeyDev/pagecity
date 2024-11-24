import { ip, serverPort } from './config.js';
import express from 'express';
import sequelize from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import swagger from './swagger.js';
import basicAuth from 'express-basic-auth';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const PORT = serverPort;

// Получаем текущий путь к файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Добавьте это для обработки данных формы
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory
app.use('/api', authRoutes);
app.use('/admin', basicAuth({
  users: { 'admin': 'admin' },
  challenge: true,
  unauthorizedResponse: (req) => {
    return 'Unauthorized';
  }
}), adminRoutes);
app.use('/api', newsRoutes);
app.use('/api', feedbackRoutes);

swagger(app);

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`СЕРВЕР СЛУШАЕТСЯ ПО АДРЕСУ ${ip}:${PORT}`);
  });
});