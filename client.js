import Seller from './seller.js';

class Client {
  constructor(id, name, boughtProducts = []) {
    this.id = id;
    this.name = name;
    this.boughtProducts = boughtProducts;
  }
  buyProduct(shopName, id) {
    if (shopName) {
      shopName.allProducts.forEach((element, i) => {
        if (element.id == id) {
          console.log(this.name + ' just bought ' + element.productHeader);
          return this.boughtProducts.push(element);
        } else if (shopName.allProducts.length - 1 == i) {
          return console.log("couldn't find any item on given id: " + id);
        }
      });
    }
  }
  startConservation() {}
  rateProduct() {}
  static create({ id, name, boughtProducts }) {
    return new Client(id, name, boughtProducts);
  }
}

export default Client;
