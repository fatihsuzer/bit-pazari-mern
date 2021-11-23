import { sellerService, productService } from '../services/index.js';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const sellers = await sellerService.load();
  res.render('sellers', { sellers: sellers });
});

router.post('/', async (req, res) => {
  const seller = await sellerService.insert(req.body);
  res.send(seller);
});

router.delete('/:sellerId', async (req, res) => {
  sellerService.removeBy('_id', req.params.sellerId);

  res.send('OK');
});

router.get('/:sellerId', async (req, res) => {
  const seller = await sellerService.find(req.params.sellerId);
  if (!seller) return res.status(404).send('404, seller not found');
  res.render('seller', { seller: seller });
});

router.post('/:sellerId', async (req, res, next) => {
  const { sellerId } = req.params;
  const { productHeader, price } = req.body;
  try {
    const product = await sellerService.addProduct(
      productHeader,
      sellerId,
      price
    );
    res.send(product);
  } catch (err) {
    next(err);
  }
});

router.delete('/:sellerId/:productId', async (req, res) => {
  const { sellerId, productId } = req.params;
  await sellerService.removeProduct(sellerId, productId);
  await productService.removeBy('id', productId);
  res.send('OK');
});

router.patch('/:sellerId', async (req, res) => {
  const { sellerId } = req.params;
  const { name } = req.body;
  await sellerService.update(sellerId, { name });
});

export default router;
