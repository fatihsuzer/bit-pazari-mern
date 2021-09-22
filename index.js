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

// const frank = new Seller("Frank's shop", 44);
// const tyran = new Seller(55, "Tyran's shop");
// frank.addProduct('Iphone 11 64GB', '123ab', 700, 15);
// const abdul = new Client('3a', 'Abdul');
// const murad = new Client('45a', 'Murad');
// const nikel = new Seller("Nikel's shop", 15);
// abdul.buyProduct(frank, '123ab', 1);
// sellerDatabase.save([frank, tyran]);
// sellers.forEach((element) => {
//   console.log(element.name);
// });
// sellerDatabase.insert(tyran);
// printEachObject(productDatabase);
const item = productDatabase.findById(55);
// console.log(item);
// item.name = `Frank's Shop`;
console.log(productDatabase.findByName('Iphone 11 64GB'));
console.log(productDatabase.findBy('productHeader', 'Iphone 11 64GB'));
// sellerDatabase.remove(item);
// frank.addProduct('xdd', 'wowo', 15);
// console.log(frank);
// SellerDatabase.save([frank, tyran]);
// ClientDatabase.save([abdul, murad]);

// printEachObject(ProductDatabase);
