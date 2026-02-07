const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  upc: String,
  name: String,
  price: Number,
  stock: Number,
});

module.exports = mongoose.model('Product', ProductSchema);
