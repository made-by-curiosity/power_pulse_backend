const {Schema, model} = require('mongoose');

const filterSchema = new Schema({
    filter: String,
    name: String,
    imgURL: String,
});

const Filters = model('filters', filterSchema);

module.exports = {
    Filters,
};