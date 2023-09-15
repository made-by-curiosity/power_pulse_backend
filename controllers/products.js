const ProductCategory = require('../models/ProductCategory'); 

async function getAllProductCategories(req, res) {
  try {
    const categories = await ProductCategory.find();

    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  getAllProductCategories,
};