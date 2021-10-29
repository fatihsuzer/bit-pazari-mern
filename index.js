import express from 'express';
import bodyParser from 'body-parser';
import sellersRouter from './routes/sellers.js';
import indexRouter from './routes/index.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.set('view engine', 'pug');

app.use('/sellers', sellersRouter);
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`started listening on port:${port}`);
});
