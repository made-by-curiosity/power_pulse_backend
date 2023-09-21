const { Product, Category } = require('../models/product'); 
const tryCatchWrapper = require('../middlewares/tryCatchWrapper');

const getAllProductCategories = async (req, res) => {
  const result = await Category.find();
  res.json(result);
};

const getProductsByBloodType = async (req, res) => {
  const { userParams } = req.user;
  const { blood } = userParams;
  const { recommended } = req.query; 

  let query = {};

  if (blood) {
    query[`groupBloodNotAllowed.${blood}`] = { $ne: true };
  }

  if (recommended === 'true') {
    query['recommended'] = true;
  } else if (recommended === 'false') {
    query['recommended'] = false;
  }

  const filteredProductsByBloodType = await Product.find(query);
  res.json(filteredProductsByBloodType);
};

module.exports = {
  getAllProductCategories: tryCatchWrapper(getAllProductCategories),
  getProductsByBloodType: tryCatchWrapper(getProductsByBloodType),
};