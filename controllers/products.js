const Product = require('../models/product'); 
const tryCatchWrapper = require('../middlewares/tryCatchWrapper');

const getAllProductCategories = async (req, res) => {
  const result = await Product.find();
  res.json(result);
};

const getAllProductsByBloodType = async (req, res) => {
  const { bloodType } = req.params;

  if (!['1', '2', '3', '4'].includes(bloodType)) {
    return res.status(404).json({ "message": "Not found" });
  }

  const query = { [`groupBloodNotAllowed.${bloodType}`]: true };
  const products = await Product.find(query);

  res.json(products);
};

module.exports = {
  getAllProductCategories: tryCatchWrapper(getAllProductCategories),
  getAllProductsByBloodType: tryCatchWrapper(getAllProductsByBloodType),
};