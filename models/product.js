const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    weight: Number,
    calories: Number,
    category: String,
    title: String,
});

const Product = model('product', productSchema);

module.exports = Product;