import sellerDatabase from '../database/seller-database.js';

class Client {
  constructor(id, name, boughtProducts = []) {
    this.id = id;
    this.name = name;
    this.boughtProducts = boughtProducts;
  }
  buyProduct(shopName, productIdToBuy) {
    let seller = sellerDatabase.findBy('name', shopName);
    if (seller) {
      const product =
        seller.allProducts[
          seller.allProducts.findIndex(
            (element) => element.id == productIdToBuy
          )
        ];
      console.log(this.name + ' just bought ' + product);
      return this.boughtProducts.push(product);
    }
    return console.log("couldn't find any item on given id: " + shopName);
  }

  startConservation() {}
  rateProduct() {}
  static create({ id, name, boughtProducts }) {
    return new Client(id, name, boughtProducts);
  }
}

export default Client;
