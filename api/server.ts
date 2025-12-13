import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connect';
import app from './app';
import asyncWrapper from './middlewares/wrappers/async';

const port: number = Number(process.env.PORT) || 3000;

const start = asyncWrapper(async() : Promise<void> => {
    await connectDB()
    app.listen(port)
});

start();