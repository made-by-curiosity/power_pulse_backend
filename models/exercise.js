const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
  bodyPart: String,
  equipment: String,
  gifUrl: String,
  name: String,
  target: String,
  burnedCalories: Number,
  time: Number,
});

const filterSchema = new Schema({
  filter: String,
  name: String,
  imgURL: String,
});

const Exercise = model('exercises', exerciseSchema);
const Filter = model('filters', filterSchema);

module.exports = {
  Exercise,
  Filter,
};
