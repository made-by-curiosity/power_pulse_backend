const { Product, Category } = require('../models/product'); 
const tryCatchWrapper = require('../middlewares/tryCatchWrapper');

const getAllProductCategories = async (req, res) => {
  const result = await Category.find();
  res.json(result);
};

const getProductsByBloodType = async (req, res) => {
  const { blood } = req.user.userParams;
  const { recommended } = req.query;

  const query = {};

  if (recommended !== undefined) {
    if (blood) {
      query[`groupBloodNotAllowed.${blood}`] = recommended === 'false' ? false : true;
    }
  }

  const filteredProductsByBloodType = await Product.find(query);

  res.json(filteredProductsByBloodType);
};


module.exports = {
  getAllProductCategories: tryCatchWrapper(getAllProductCategories),
  getProductsByBloodType: tryCatchWrapper(getProductsByBloodType),
};