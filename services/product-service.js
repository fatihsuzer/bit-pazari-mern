import BaseService from './base-service.js';
import Product from '../models/product.js';
import sellerService from './seller-service.js';

class ProductService extends BaseService {
  async findByName(name) {
    return await this.findBy('productHeader', name);
  }

  async findBySeller(sellerId) {
    return this.findBy('seller', sellerId);
  }
}
export default new ProductService(Product);
