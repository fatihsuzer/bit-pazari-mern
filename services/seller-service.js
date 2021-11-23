import BaseService from './base-service.js';
import Seller from '../models/seller.js';
import productService from './product-service.js';

class SellerService extends BaseService {
  async removeProduct(sellerId, productId) {
    const seller = await this.find(sellerId);
    const index = seller.allProducts.findIndex((o) => o.id == productId);
    if (index == -1)
      throw new Error(`Cannot find product on given seller id: ${sellerId}`);
    seller.allProducts.splice(index, 1);
    return this.update(sellerId, seller.allProducts);
  }

  async addProduct(productHeader, sellerId, price) {
    const seller = await this.find(sellerId);
    const product = await productService.insert({
      productHeader,
      seller,
      price,
    });
    seller.allProducts.push(product);
    await seller.save();
    return product;
  }
}

export default new SellerService(Seller);
