import { clientService } from '../services/index.js';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const clients = await clientService.load();
  res.render('clients', { clients: clients });
});

router.post('/', async (req, res) => {
  const client = await clientService.insert(req.body);
  res.send(client);
});

router.delete('/:clientId', async (req, res) => {
  clientService.removeBy('_id', req.params.clientId);

  res.send('OK');
});

router.get('/:clientId', async (req, res) => {
  const client = await clientService.find(req.params.clientId);
  if (!client) return res.status(404).send('404, client not found');
  res.render('client', { client: client });
});

router.post('/:clientId/buyproduct', async (req, res) => {
  const { clientId } = req.params;
  const productId = req.query.productId;

  await clientService.buyProduct(clientId, productId);
  res.send('OK');
});

router.patch('/:clientId', async (req, res) => {
  const { clientId } = req.params;
  const { name } = req.body;

  await clientService.update(clientId, { name });
});

export default router;
