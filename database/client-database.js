import BaseDatabase from './base-database.js';
import Client from '../client.js';
import sellerDatabase from './seller-database.js';

class ClientDatabase extends BaseDatabase {
  findById(objectId) {
    const objects = this.load();
    return objects.find((element) => element.id === objectId);
  }
  printBoughtObjects(client) {
    const sellers = sellerDatabase.load();
    const object = this.load().find((element) => element.id === client.id);
    object.boughtProducts.forEach((element) => {
      console.log(
        `${object.name} bought ${element.productHeader} from ${
          sellerDatabase.findById(element.sellerID).name
        }`
      );
    });
  }
}

export default new ClientDatabase(Client);
