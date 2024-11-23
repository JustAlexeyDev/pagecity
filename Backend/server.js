const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const newsRoutes = require('./routes/newsRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const swagger = require('./swagger');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/api', authRoutes);
app.use('/admin', adminRoutes);
app.use('/api', newsRoutes);
app.use('/api', feedbackRoutes);

swagger(app);

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`СЕРВЕР СЛУШАЕТСЯ ПО АДРЕСУ http://localhost:${PORT}`);
  });
});