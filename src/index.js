import express from 'express';
import 'dotenv/config';
import { authRouter } from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import './models/user.js';
import './models/token.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    // Беремо адресу фронта з .env (у тебе там http://localhost:5173)
    origin: process.env.CLIENT_HOST,
    // Дозволяємо передачу кук
    credentials: true,
    // Дозволяємо стандартні методи
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    // Дозволяємо заголовки, які зазвичай потрібні для авторизації
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);
app.use(authRouter);

app.listen(3005);
