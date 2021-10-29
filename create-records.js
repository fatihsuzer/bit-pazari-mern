import Seller from './models/seller.js';
import Client from './models/client.js';
import Product from './models/product.js';
import {
  sellerDatabase,
  clientDatabase,
  productDatabase,
} from './database/index.js';

async function main() {
  //Creating sellers and client, adding products and buying a product
  const frank = Seller.create({ name: "Frank's shop" });
  const tyran = Seller.create({ name: "Tyran's shop" });
  const mike = Seller.create({ name: 'Mike the Seller' });
  await sellerDatabase.save([frank, tyran, mike]);
  const abdul = Client.create({ name: 'Abdul' });
  const michael = Client.create({ name: 'Michael' });
  await clientDatabase.save([michael, abdul]);

  const iphoneProduct = Product.create({
    productHeader: 'dummy item',
    seller: '',
    price: 75,
  });
  productDatabase.save([iphoneProduct]);

  await frank.addProduct('Iphone 11 64GB', 700);
  await frank.addProduct('a new bmw ', 20200);
  await frank.addProduct('gray coffe cup', 10);
  await tyran.addProduct('long bed sheet', 30);
  await sellerDatabase.update(frank);
  await sellerDatabase.update(tyran);
  await michael.buyProduct(
    '28242fcc-861f-4a50-8cfe-88e5e1f290a3',
    '13b8ccd8-f490-448e-9a84-fc13cd27b594'
  );
  await clientDatabase.update(michael);
  clientDatabase.load().then((e) => console.log(e));
}
main();
