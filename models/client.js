import mongoose from 'mongoose';
import autoPopulate from 'mongoose-autopopulate';

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  boughtProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      autopopulate: true,
    },
  ],
});

ClientSchema.plugin(autoPopulate);
const Client = mongoose.model('Client', ClientSchema);

export default Client;

// buyProduct(){}
//   startConservation() {}
//   rateProduct() {}
