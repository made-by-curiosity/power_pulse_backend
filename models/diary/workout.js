const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleSchemaValidationErrors } = require('../../helpers');

const workoutSchema = new Schema(
  {
    exerciseId: {
      type: Schema.Types.ObjectId,
      ref: 'exercises',
      required: [true, 'Set exercise ID'],
    },
    time: {
      type: Number,
      min: [1, 'The time cannot be less than 1 minute'],
      required: [true, 'Set the time of the exercise'],
    },
    calories: {
      type: Number,
      min: [1, 'The calories cannot be less than 1'],
      required: [true, 'Set the calories of the exercise'],
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

workoutSchema.post('save', handleSchemaValidationErrors);
const Workout = model('workout', workoutSchema);

const postWorkoutSchema = Joi.object({
  exerciseId: Joi.string().required(),
  time: Joi.number().min(1).required(),
  calories: Joi.number().min(1).required(),
});

const schemasWorkout = {
  postWorkoutSchema,
};

module.exports = {
  Workout,
  schemasWorkout,
};
