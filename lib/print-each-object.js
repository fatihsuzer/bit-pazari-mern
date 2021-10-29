function printEachObject(databaseName) {
  databaseName.load().forEach((e) => {
    console.log(e);
  });
}

export default printEachObject;
