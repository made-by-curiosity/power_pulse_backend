const { diary } = require('../../models');

const { workout } = diary;

const getCountWorkouts = async (req, res) => {
	const сountWorkouts = await workout.Workout.countDocuments();
  res.json(сountWorkouts);
};

module.exports = getCountWorkouts;