// import Product from './product.js';
import productDatabase from '../database/product-database.js';
// import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';

const SellerSchema = new mongoose.Schema({
  name: String,
  allProducts: [],
  comments: [],
});
const Seller = mongoose.model('Seller', SellerSchema);

export default { Seller };
