import sellerDatabase from '../database/seller-database.js';
import { v4 as uuidv4 } from 'uuid';

class Client {
  constructor(id = uuidv4(), name, boughtProducts = []) {
    this.id = id;
    this.name = name;
    this.boughtProducts = boughtProducts;
  }
  async buyProduct(shopId, productIdToBuy) {
    let seller = await sellerDatabase.findById(shopId);
    if (seller) {
      const index = seller.allProducts.findIndex(
        (element) => element.id == productIdToBuy
      );
      const product = seller.allProducts[index];
      console.log(this.name + ' just bought ' + product.productHeader);
      return this.boughtProducts.push(product);
    }
    return console.log("couldn't find any item on given id: " + shopId);
  }

  startConservation() {}
  rateProduct() {}
  static create({ id, name, boughtProducts }) {
    return new Client(id, name, boughtProducts);
  }
}

export default Client;
