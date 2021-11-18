import { productService } from '../services/index.js';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await productService.load();
  res.render('products', { products: products });
});

router.get('/:productId', async (req, res) => {
  const product = await productService.find(req.params.productId);
  if (!product) return res.status(404).send('404, product not found');
  res.render('product', { product: product });
});

router.get('/search', async (req, res) => {
  const sellerId = req.query.sellerId;
  const products = await productService.findBySeller(sellerId);
  res.render('products', { products });
});

export default router;
