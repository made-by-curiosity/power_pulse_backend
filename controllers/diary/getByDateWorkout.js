const { endOfDay, startOfDay } = require('date-fns');
const { diary } = require('../../models');

const { workout } = diary;

const getByDateWorkout = async (req, res) => {
  const { _id: owner } = req.user;

  const today = new Date();
  const { date = today } = req.query;

  const listWorkout = await workout.Workout.find(
    {
      owner,
      createdAt: {
        $gte: startOfDay(new Date(date)),
        $lte: endOfDay(new Date(date)),
      },
    },
    '-owner -createdAt -updatedAt'
  ).populate('exerciseId', '_id bodyPart equipment gifUrl name target burnedCalories time');

  res.json(listWorkout);
};

module.exports = getByDateWorkout;
