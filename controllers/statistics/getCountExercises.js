const { exercise } = require('../../models');

const getCountExercises = async (req, res) => {
  const countExercises = await exercise.Exercise.countDocuments();
  res.json({
    totalExercises: countExercises,
  });
};

module.exports = getCountExercises;
