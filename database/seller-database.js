import BaseDatabase from './base-database.js';
import Seller from '../models/seller.js';

class SellerDatabase extends BaseDatabase {
  async removeProduct(sellerId, productId) {
    const objects = await this.load();
    const seller = objects.find((o) => o.id == sellerId);
    const sellerIndex = objects.findIndex((o) => o == seller);
    const index = seller.allProducts.findIndex((o) => o.id == productId);
    if (index == -1)
      throw new Error(`Cannot find product on given seller id: ${sellerId}`);

    seller.allProducts.splice(index, 1);
    objects.splice(sellerIndex, 1, seller);
    return this.save(objects);
  }
}

export default new SellerDatabase(Seller);
