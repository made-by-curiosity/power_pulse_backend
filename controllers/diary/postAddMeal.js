const { diary } = require('../../models');

const { Meal } = diary.meal;

const postAddMeal = async (req, res) => {
  const { _id: owner } = req.user;
  const addMeal = await Meal.create({ ...req.body, owner });
  res.status(201).json(addMeal);
};

module.exports = postAddMeal;
