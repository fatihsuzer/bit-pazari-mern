import * as fs from 'fs';
import { parse, stringify } from 'flatted';

class BaseDatabase {
  constructor(model) {
    if (model.Seller) {
      this.model = model.Seller;
    } else {
      this.model = model;
    }
  }

  save(objects) {
    return this.model.insertMany(objects);
  }

  load() {
    return this.model.find();
  }

  async insert(object) {
    return await this.model.create(object);
  }

  async removeBy(property, value) {
    return this.model.deleteOne({ [property]: value });
  }

  async update(id, object) {
    return this.model.findByIdAndUpdate(id, object);
  }

  async find(id) {
    return this.model.findById(id);
  }

  async findBy(property, value) {
    return this.model.find({ [property]: value });
  }
}
export default BaseDatabase;
