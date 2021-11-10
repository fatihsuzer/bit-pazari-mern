import mongoose from 'mongoose';

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/bit-pazari');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to mongodb');
});

export default mongoose;
