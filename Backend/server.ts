import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import multer from 'multer';
import bodyParser from 'body-parser';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port: number = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'just.alexdev@gmail.com', 
        pass: ''  
    }
});

// Swagger options
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Жалобы API',
            version: 'BETA',
            description: 'API для отправки жалоб на почту',
        },
    },
    apis: ['server.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req: Request, res: Response) => {
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
 *         description: Пидар бля опять накосячил
 */
app.post('/submit-complaint', upload.single('media'), (req: Request, res: Response) => {
    const { name, phone, email, text } = req.body;
    const media = req.file as Express.Multer.File | undefined;

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

    transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
        if (error) {
            console.error('Ошибка отправки сообщения:', error);
            res.status(500).json({ message: 'Пидар бля опять накосячил', error: error.message });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Сообщение успешно отправлено' });
        }
    });
});

app.listen(port, () => {
    console.log(`Сервер слушается по адресу http://localhost:${port}`);
});