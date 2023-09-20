const { endOfDay, startOfDay } = require('date-fns');
const { diary } = require('../../models');

const { meal } = diary;

const getCountUsers = async (req, res) => {
  const { _id: owner } = req.user;

  const today = new Date();
  const { date = today } = req.query;

  const listMeal = await meal.Meal.find(
    {
      owner,
      createdAt: {
        $gte: startOfDay(new Date(date)),
        $lte: endOfDay(new Date(date)),
      },
    },
    '-owner -createdAt -updatedAt'
  ).populate('productId', '_id weight calories category title groupBloodNotAllowed');

  res.json(listMeal);
};

module.exports = getCountUsers;