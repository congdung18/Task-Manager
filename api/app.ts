import express, {Application} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tasks from './routes/tasks.route';
import admin from './routes/admin.route';
import auth from './routes/authentication.route';

import { errorHandling } from './middlewares/errors/error_handling';
import { morganMiddleware } from './middlewares/logging/morgan';

export const app: Application = express();

app.use(helmet());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173']
}));

app.use(morganMiddleware);
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', auth);
app.use('/api/v1/tasks', tasks);
app.use('/api/v1/admin', admin);

app.use(errorHandling);