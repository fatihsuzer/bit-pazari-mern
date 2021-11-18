import mongoose from 'mongoose';
import autoPopulate from 'mongoose-autopopulate';

const SellerSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  allProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      autopopulate: { maxDepth: 2 },
    },
  ],
  comments: [],
});

SellerSchema.plugin(autoPopulate);
const Seller = mongoose.model('Seller', SellerSchema);
export default Seller;
