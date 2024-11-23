const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'example@gmail.com',
        pass: 'your-app-password' 
    }
});

// Swagger options
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Жалобы API',
            version: '1.0.0',
            description: 'API для отправки жалоб на почту',
        },
    },
    apis: ['server.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

/**
 * @swagger
 * /submit-complaint:
 *   post:
 *     summary: Отправка жалобы
 *     description: Отправляет жалобу на почту с прикрепленным файлом (если есть)
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: complaint
 *         description: Данные жалобы
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             phone:
 *               type: string
 *             email:
 *               type: string
 *             text:
 *               type: string
 *       - in: formData
 *         name: media
 *         type: file
 *         description: Медиафайл для прикрепления к жалобе
 *     responses:
 *       200:
 *         description: Сообщение успешно отправлено
 *       500:
 *         description: Ошибка отправки сообщения
 */
app.post('/submit-complaint', upload.single('media'), (req, res) => {
    const { name, phone, email, text } = req.body;
    const media = req.file;

    const mailOptions = {
        from: `${email}`,
        to: 'just.alexdev@gmail.com',
        subject: 'Жалоба с лендинг сайта',
        text: `Имя: ${name}\nТелефон: ${phone}\nПочта: ${email}\nТекст: ${text}`,
        attachments: media ? [{
            filename: media.originalname,
            content: media.buffer
        }] : []
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Ошибка отправки сообщения:', error);
            res.status(500).json({ message: 'Ошибка отправки сообщения', error: error.message });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Сообщение успешно отправлено' });
        }
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});