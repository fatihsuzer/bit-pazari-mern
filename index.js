import express from 'express';
import sellerDatabase from './database/seller-database.js';
import Seller from './models/seller.js';
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
  const seller = Seller.create(req.body);
  await sellerDatabase.insert(seller);
  res.send(seller);
});

app.delete('/sellers/:sellerId', async (req, res) => {
  sellerDatabase.removeBy('id', req.params.sellerId);

  res.send('OK');
});

app.get('/sellers/:sellerId', async (req, res) => {
  const seller = await sellerDatabase.findById(req.params.sellerId);
  if (!seller) return res.send('404, seller not found').sendStatus(404);
  res.render('seller', { seller: seller });
});

app.post('/sellers/:sellerId', async (req, res) => {
  const { sellerId } = req.params;
  const { productId, productHeader, price } = req.body;
  const seller = await sellerDatabase.findById(sellerId);
  seller.addProduct(productId, productHeader, price);
  sellerDatabase.update(seller);
  res.send('OK');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`started listening on port:${port}`);
});
