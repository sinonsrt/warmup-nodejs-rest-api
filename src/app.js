import express from 'express';

const app = express();

app.get('/', (req, res) => res.status(200).send('Node Course'));
app.get('/book', (req, res) => res.status(200).send('Books'));

export default app;
