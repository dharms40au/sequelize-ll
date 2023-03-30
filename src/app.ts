import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

export default app;
