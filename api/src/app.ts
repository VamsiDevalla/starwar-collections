import express, { Application } from 'express';
import morgan from 'morgan';
import routes from './routes';

// creating an express app
const app: Application = express();

// only passing json request when content-type header is set to json type
app.use(express.json());

// concise logging for api calls in the console
app.use(morgan('dev'));

// Application routing
routes(app);

export default app;
