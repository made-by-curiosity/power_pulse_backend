const { diary } = require('../../models');

const { meal } = diary;

const postAddMeal = async (req, res) => {
  const { _id: owner } = req.user;
  const addMeal = await meal.Meal.create({ ...req.body, owner });
  res.status(201).json(addMeal);
};

module.exports = postAddMeal;


// подсчитаем количество документов, у которых name=Tom:
// db.users.find({name: "Tom"}).count()