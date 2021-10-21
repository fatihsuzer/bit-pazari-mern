import { v4 as uuidv4 } from 'uuid';

class Product {
  constructor(
    id = uuidv4(),
    productHeader,
    seller,
    price,
    productComments = []
  ) {
    this.id = id;
    this.productHeader = productHeader;
    this.seller = seller;
    this.price = price;
    this.productComments = productComments;
  }

  static create({ id, productHeader, seller, price, productComments }) {
    return new Product(id, productHeader, seller, price, productComments);
  }
}

export default Product;
