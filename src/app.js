import express from 'express';
import router from './config/routes/routes.js';

const app = express();

app.use(express.json());
app.use(router);

app.get('/', (req, res) => res.status(200).send('Node Course'));

export default app;
