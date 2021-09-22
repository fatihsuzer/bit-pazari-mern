import Product from './product.js';
import productDatabase from './database/product-database.js';

class Seller {
  constructor(id, name, allProducts = [], comments = []) {
    this.id = id;
    this.name = name;
    this.allProducts = allProducts;
    this.comments = comments;
  }

  addProduct(productID, productHeader, price) {
    const product = new Product(productID, productHeader, this.sellerID, price);
    this.allProducts.push(product);
    productDatabase.insert([product]);
    return product;
  }

  static create({ id, name, allProducts, comments }) {
    return new Seller(id, name, allProducts, comments);
  }
}
//'_' + Math.random().toString(36).substr(2, 9);

export default Seller;
