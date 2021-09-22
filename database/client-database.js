import BaseDatabase from './base-database.js';
import Client from '../client.js';

class ClientDatabase extends BaseDatabase {
  findById(objectId) {
    const objects = this.load();
    return objects.find((element) => element.id === objectId);
  }
}

export default new ClientDatabase(Client);
