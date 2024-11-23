const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

// Настройка body-parser для обработки данных формы
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Настройка multer для загрузки файлов
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Настройка Nodemailer для отправки писем
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'example@gmail.com', // Ваша почта
        pass: 'yourpassword' // Ваш пароль
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
    apis: ['server.js'], // Укажите файл, где находятся ваши маршруты
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - phone
 *             - email
 *             - text
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
        from: 'example@gmail.com',
        to: 'example@gmail.com',
        subject: 'Жалоба с лендинг сайта',
        text: `Имя: ${name}\nТелефон: ${phone}\nПочта: ${email}\nТекст: ${text}`,
        attachments: media ? [{
            filename: media.originalname,
            content: media.buffer
        }] : []
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Ошибка отправки сообщения' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Сообщение успешно отправлено' });
        }
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});