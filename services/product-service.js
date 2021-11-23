import BaseService from './base-service.js';
import Product from '../models/product.js';

class ProductService extends BaseService {
  async findByName(name) {
    return await this.findBy('productHeader', name);
  }

  async findBySeller(sellerId) {
    return await this.model.find({ seller: sellerId });
  }
}
export default new ProductService(Product);
