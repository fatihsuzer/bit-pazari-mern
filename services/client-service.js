import BaseService from './base-service.js';
import Client from '../models/client.js';
import productService from './product-service.js';

class ClientService extends BaseService {
  async printBoughtObjects(client) {
    const currentClient = await this.find(client);
    return currentClient.boughtProducts;
  }

  async buyProduct(clientId, productId) {
    const client = await this.find(clientId);
    const product = await productService.find(productId);

    client.boughtProducts.push(product);
    await client.save();
    return client;
  }
}

export default new ClientService(Client);
