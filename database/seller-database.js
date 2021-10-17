import BaseDatabase from './base-database.js';
import Seller from '../models/seller.js';

class SellerDatabase extends BaseDatabase {
  async findById(objectId) {
    const objects = await this.load();
    return objects.find((e) => e.id === objectId);
  }
}

export default new SellerDatabase(Seller);
