import Seller from './seller.js';
import Client from './client.js';
import Product from './product.js';
import {
  sellerDatabase,
  productDatabase,
  clientDatabase,
} from './database/index.js';

function printEachObject(databaseName) {
  databaseName.load().forEach((e) => {
    console.log(e);
  });
}

// printEachObject(productDatabase);
// Creating sellers and client, adding products
// const frank = new Seller("Frank's shop", 44);
// const tyran = new Seller(55, "Tyran's shop");
// frank.addProduct('Iphone 11 64GB', '123ab', 700, 15);
// const abdul = new Client('3a', 'Abdul');
// const murad = new Client('45a', 'Murad');
// const nikel = new Seller("Nikel's shop", 15);
// abdul.buyProduct(frank, '123ab', 1);
// sellerDatabase.save([frank, tyran]);
// printEachObject(productDatabase);

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
