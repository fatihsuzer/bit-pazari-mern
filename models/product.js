import mongoose from 'mongoose';
import autoPopulate from 'mongoose-autopopulate';

const ProductSchema = new mongoose.Schema({
  productHeader: { type: String, required: true },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',
    autopopulate: true,
  },
  price: { type: String, required: true },
  productComments: [],
});

ProductSchema.plugin(autoPopulate);
const Product = mongoose.model('Product', ProductSchema);

export default Product;
