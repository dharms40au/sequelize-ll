import express from 'express';
import bodyParser from 'body-parser';
import errorMiddleware from './middleware/error.middleware';

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

export default app;
