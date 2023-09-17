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

const Exercises = model('exercises', exercisesSchema);

module.exports = {
    Exercises,
};