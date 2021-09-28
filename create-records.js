import Seller from './models/seller';
import Product from './models/product';
import Client from './models/client';
import {
  sellerDatabase,
  productDatabase,
  clientDatabase,
} from './database/index.js';

// Creating sellers and client, adding products
// const frank = new Seller("Frank's shop", 44);
// const tyran = new Seller(55, "Tyran's shop");
// frank.addProduct('Iphone 11 64GB', '123ab', 700, 15);
// sellerDatabase.save([frank, tyran]);
// const abdul = new Client('3a', 'Abdul');
// const murad = new Client('45a', 'Murad');
// const nikel = new Seller("Nikel's shop", 15);
// abdul.buyProduct(frank, '123ab', 1);
// clientDatabase.save([abdul, murad]);
