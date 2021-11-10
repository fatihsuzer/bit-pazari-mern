import BaseDatabase from './base-database.js';
import Product from '../models/product.js';

class ProductDatabase extends BaseDatabase {
  async findByName(name) {
    return await this.findBy('productHeader', name);
  }
}
export default new ProductDatabase(Product);
