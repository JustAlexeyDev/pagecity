import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { ip, serverPort } from './config.js';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'News API',
      version: '1.0.0',
      description: 'API'
    },
    servers: [
      {
        url: `http://localhost:${serverPort}`
      }
    ],
    components: {
      securitySchemes: {
        BasicAuth: {
          type: 'http',
          scheme: 'basic'
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

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    explorer: true,
    swaggerOptions: {
      authAction: {
        BasicAuth: {
          name: 'BasicAuth',
          schema: {
            type: 'http',
            in: 'header',
            name: 'Authorization',
            scheme: 'basic',
            description: 'Enter your username and password'
          },
          value: 'Basic ' + Buffer.from('admin:admin').toString('base64')
        }
      }
    }
  }));
};