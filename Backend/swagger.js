const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'News API',
      version: '1.0.0',
      description: 'API for managing news and feedback'
    },
    servers: [
      {
        url: 'http://localhost:8000'
      }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        News: {
          type: 'object',
          properties: {
            id: {
              type: 'integer'
            },
            title: {
              type: 'string'
            },
            content: {
              type: 'string'
            },
            media: {
              type: 'string'
            },
            date: {
              type: 'string',
              format: 'date-time'
            },
            categoryId: {
              type: 'integer'
            }
          }
        },
        Category: {
          type: 'object',
          properties: {
            id: {
              type: 'integer'
            },
            name: {
              type: 'string'
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};