const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  weight: Number,
  calories: Number,
  category: String,
  title: String,
  groupBloodNotAllowed: {
    1: Boolean,
    2: Boolean,
    3: Boolean,
    4: Boolean,
  },
});

const Product = model('product', productSchema);

module.exports = Product;
