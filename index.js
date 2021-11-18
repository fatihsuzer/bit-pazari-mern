import express from 'express';
import bodyParser from 'body-parser';
import sellersRouter from './routes/sellers.js';
import clientsRouter from './routes/clients.js';
import productsRouter from './routes/products.js';
import indexRouter from './routes/index.js';
import mongoose from './mongo-connection.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.set('view engine', 'pug');

app.use('/sellers', sellersRouter);
app.use('/clients', clientsRouter);
app.use('/products', productsRouter);
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`started listening on port:${port}`);
});
