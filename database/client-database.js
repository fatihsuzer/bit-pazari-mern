import BaseDatabase from './base-database.js';
import Client from '../models/client.js';
import sellerDatabase from './seller-database.js';

class ClientDatabase extends BaseDatabase {
  async printBoughtObjects(client) {
    const objects = await this.load();
    const object = objects.find((element) => element.id === client.id);
    object.boughtProducts.forEach(async (element) => {
      console.log(
        `${object.name} bought ${element.productHeader} from ${
          (await sellerDatabase.findById(element.sellerID)).name
        }`
      );
    });
  }
}

export default new ClientDatabase(Client);
