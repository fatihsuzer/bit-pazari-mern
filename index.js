import express from 'express';
import sellerDatabase from './database/seller-database.js';
import productDatabase from './database/product-database.js';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.set('view engine', 'pug');

app.get('/sellers', async (req, res) => {
  const sellers = await sellerDatabase.load();
  res.render('sellers', { sellers: sellers });
});

app.post('/sellers', async (req, res) => {
  const seller = await sellerDatabase.insert(req.body);
  res.send(seller);
});

app.delete('/sellers/:sellerId', async (req, res) => {
  sellerDatabase.removeBy('id', req.params.sellerId);

  res.send('OK');
});

app.get('/sellers/:sellerId', async (req, res) => {
  const seller = await sellerDatabase.findById(req.params.sellerId);
  if (!seller) return res.status(404).send('404, seller not found');
  res.render('seller', { seller: seller });
});

app.post('/sellers/:sellerId', async (req, res) => {
  const { sellerId } = req.params;
  const { productHeader, price } = req.body;
  const seller = await sellerDatabase.findById(sellerId);
  seller.addProduct(productHeader, price);
  sellerDatabase.update(seller);
  res.send('OK');
});

app.delete('/sellers/:sellerId/:productId', async (req, res) => {
  const { sellerId, productId } = req.params;
  await sellerDatabase.removeProduct(sellerId, productId);
  await productDatabase.removeBy('id', productId);
  res.send('OK');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`started listening on port:${port}`);
});
