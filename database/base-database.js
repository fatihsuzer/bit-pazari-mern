import * as fs from 'fs';

class BaseDatabase {
  constructor(model) {
    this.model = model;
    this.filename = model.name.toLowerCase();
  }

  save(objects) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        `./database/${this.filename}.json`,
        JSON.stringify(objects, null, 2),
        (err) => {
          if (err) return reject(err);
          resolve();
        }
      );
    });
  }

  load() {
    return new Promise((resolve, reject) => {
      fs.readFile(`./database/${this.filename}.json`, 'utf8', (err, file) => {
        if (err) return reject(err);
        const objects = JSON.parse(file);
        resolve(objects.map(this.model.create));
      });
    });
  }

  async insert(object) {
    const objects = await this.load();
    return this.save(objects.concat(object));
  }

  async remove(object) {
    const objects = await this.load();
    const index = objects.findIndex((o) => o.id === object.id);
    if (index != -1) {
      objects.splice(index, 1);
      return this.save(objects);
    }
    throw new Error(`cannot find given id, remove task failed!`);
  }

  async removeBy(property, value) {
    const objects = await this.load();

    const index = objects.findIndex((o) => o[property] == value);
    if (index == -1)
      throw new Error(
        `Cannot find${this.model.name} instance with id ${property} ${value}`
      );

    objects.splice(index, 1);
    await this.save(objects);
  }

  async update(object) {
    const objects = await this.load();
    const index = objects.findIndex((o) => o.id == object.id);
    if (index == -1)
      throw new Error(
        `Cannot find${this.model.name} instance with id ${object.id}`
      );
    objects.splice(index, 1, object);
    await this.save(objects);
  }
  async findBy(property, value) {
    return await this.load().find((o) => o[property] == value);
  }
}
export default BaseDatabase;
