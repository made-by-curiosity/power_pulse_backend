const {Schema, model} = require('mongoose');

const exercisesSchema = new Schema({
    bodyPart: String,
    equipment: String,
    gifUrl: String,
    name: String,
    target: String,
    burnedCalories:Number,
    time: Number,
});

const filterSchema = new Schema({
    
filter: String,
name: String,
imgURL: String,
});

const Exercises = model('exercises', exercisesSchema);
const Filters = model('filter', filterSchema);

module.exports = {
    Exercises,
    Filters,
};