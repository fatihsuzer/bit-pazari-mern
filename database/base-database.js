import * as fs from 'fs';

class BaseDatabase {
  constructor(model) {
    this.model = model;
    this.filename = model.name.toLowerCase();
  }

  save(objects) {
    fs.writeFileSync(
      `./database/${this.filename}.json`,
      JSON.stringify(objects, null, 2)
    );
  }

  load() {
    const file = fs.readFileSync(`./database/${this.filename}.json`, 'utf8');
    const objects = JSON.parse(file);

    return objects.map(this.model.create);
  }

  insert(object) {
    const objects = this.load();
    this.save(objects.concat(object));
  }

  remove(object) {
    const objects = this.load();
    console.log(object);
    const index = objects.findIndex((e) => e.id == object.id);
    if (index) {
      objects.splice(index, 1);
      this.save(objects);
    } else {
      return console.log(`Can't find ${object}`);
    }
  }
  update(object) {
    const objects = this.load();
    const index = objects.findIndex((e) => e.id == object.id);
    if (index == -1)
      throw new Error(
        `Cannot find${this.model.name} instance with id ${object.id}`
      );
    objects.splice(index, 1, object);
    this.save(objects);
  }
  findBy(property, value) {
    return this.load().find((e) => e[property] == value);
  }
}
export default BaseDatabase;
