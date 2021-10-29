import Product from './product.js';
import productDatabase from '../database/product-database.js';
import { v4 as uuidv4 } from 'uuid';

class Seller {
  constructor(id = uuidv4(), name, allProducts = [], comments = []) {
    this.id = id;
    this.name = name;
    this.allProducts = allProducts;
    this.comments = comments;
  }

  async addProduct(productHeader, price) {
    const product = Product.create({
      productHeader: productHeader,
      seller: this,
      price: price,
    });
    this.allProducts.push(product);
    await productDatabase.insert(product);
    return product;
  }

  static create({ id, name, allProducts, comments }) {
    return new Seller(id, name, allProducts, comments);
  }
}
//'_' + Math.random().toString(36).substr(2, 9);

export default Seller;
