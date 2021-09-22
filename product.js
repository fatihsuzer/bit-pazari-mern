class Product {
  constructor(id, productHeader, sellerID, price, productComments = []) {
    this.id = id;
    this.productHeader = productHeader;
    this.sellerID = sellerID;
    this.price = price;
    this.productComments = productComments;
  }

  static create({ id, productHeader, sellerID, price, productComments }) {
    return new Product(id, productHeader, sellerID, price, productComments);
  }
}

export default Product;
