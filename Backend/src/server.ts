import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';
import basicAuth from 'express-basic-auth';
import feedRoutes from './routes/feedRoutes';
import adminRoutes from './routes/adminRoutes';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Customer Feedback API',
      version: 'ALPHA',
      description: 'API for MPIT 2024',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Basic Auth 
app.use(
  '/api-docs',
  basicAuth({
    users: { admin: 'admin' },
    challenge: true,
  }),
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
);

app.use('/api', feedRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/admin.html'));
});

app.listen(PORT, () => {
  console.log(`Server still running on http://localhost:${PORT}`);
});