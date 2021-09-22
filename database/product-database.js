import BaseDatabase from './base-database.js';
import Product from '../product.js';

class ProductDatabase extends BaseDatabase {
  findById(objectId) {
    return this.findBy('id', objectId);
  }

  findByName(name) {
    return this.findBy('productHeader', name);
  }
}
export default new ProductDatabase(Product);
