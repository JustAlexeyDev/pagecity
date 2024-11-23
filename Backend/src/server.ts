import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import basicAuth from 'express-basic-auth';
import feedRoutes from './routes/feedRoutes';
import adminRoutes from './routes/adminRoutes';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Swagger setup
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

// Routes
app.use('/api', feedRoutes);
app.use('/admin', adminRoutes);

// Handle root route
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Serve admin panel HTML
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/admin.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});