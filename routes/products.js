import { productService } from '../services/index.js';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await productService.load();
  res.render('products', { products: products });
});

router.get('/search', async (req, res) => {
  const sellerId = req.query.sellerId;
  const products = await productService.findBySeller(sellerId);

  res.render('products', { products });
});

router.get('/searchproduct', async (req, res) => {
  const productName = req.query.name;

  const products = await productService.findByName(productName);

  res.render('products', { products });
});

router.get('/:productId', async (req, res) => {
  const product = await productService.find(req.params.productId);

  if (!product) return res.status(404).send('404, product not found');
  res.render('product', { product: product });
});

export default router;
