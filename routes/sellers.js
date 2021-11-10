import { sellerDatabase, productDatabase } from '../database/index.js';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const sellers = await sellerDatabase.load();
  res.render('sellers', { sellers: sellers });
});

router.post('/', async (req, res) => {
  const seller = await sellerDatabase.insert(req.body);
  res.send(seller);
});

router.delete('/:sellerId', async (req, res) => {
  sellerDatabase.removeBy('_id', req.params.sellerId);

  res.send('OK');
});

router.get('/:sellerId', async (req, res) => {
  const seller = await sellerDatabase.find(req.params.sellerId);
  if (!seller) return res.status(404).send('404, seller not found');
  res.render('seller', { seller: seller });
});

router.post('/:sellerId', async (req, res) => {
  const { sellerId } = req.params;
  const { productHeader, price } = req.body;
  const seller = await sellerDatabase.findById(sellerId);
  seller.addProduct(productHeader, price);
  sellerDatabase.update(seller);
  res.send('OK');
});

router.delete('/:sellerId/:productId', async (req, res) => {
  const { sellerId, productId } = req.params;
  await sellerDatabase.removeProduct(sellerId, productId);
  await productDatabase.removeBy('id', productId);
  res.send('OK');
});

router.patch('/:sellerId', async (req, res) => {
  const { sellerId } = req.params;
  const { name } = req.body;
  await sellerDatabase.update(sellerId, { name });
});

export default router;
