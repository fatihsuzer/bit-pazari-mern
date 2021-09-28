import Seller from './models/seller.js';
import Client from './models/client.js';
import Product from './models/product.js';
import {
  sellerDatabase,
  productDatabase,
  clientDatabase,
} from './database/index.js';
import printEachObject from './lib/print-each-object.js';

printEachObject(sellerDatabase);

// finding a seller from seller database,
// making it behaving like a class instead of object
// const frank = sellerDatabase.findById(44);
// frank.addProduct('car12', 'a new bmw', 20000);
// sellerDatabase.update(frank);

// searching an item from any database, with given instructions
// console.log(productDatabase.findByName('Iphone 11 64GB'));
// console.log(productDatabase.findBy('productHeader', 'Iphone 11 64GB'));

// finding a client form database,
// then buying a product from a seller
// const abdul = clientDatabase.findBy('name', 'Abdul');
// abdul.buyProduct(`Frank's Shop`, 'car12');
// clientDatabase.update(abdul);
// clientDatabase.printBoughtObjects(clientDatabase.findById('3a'));
// sellerDatabase.insert(abdul);
