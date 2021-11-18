import BaseService from './base-service.js';
import Client from '../models/client.js';
import productService from './product-service.js';

class ClientService extends BaseService {
  async printBoughtObjects(client) {
    const currentClient = await this.find(client);
    return currentClient.boughtProducts;
  }

  async buyProduct(client, product) {
    const currentClient = await this.find(client);
    currentClient.boughtProducts.push(await productService.find(product));
    this.update(client.id, currentClient.boughtProducts);
  }
}

export default new ClientService(Client);
