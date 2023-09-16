const Product = require('../models/product'); 
const tryCatchWrapper = require('../middlewares/tryCatchWrapper')


const getAllProductCategories = async (req, res) => {
        const result = await Product.find();
        console.log(result); 
        console.log(Product)
        res.json(result);
};

const getAllProductsByBloodType = async (req, res) => {
  const { bloodType } = req.params; 
  const products = await Product.find({ groupBloodNotAllowed: { [bloodType]: true } });
  console.log('Products:', products);

  res.json(products);
};

module.exports = {
  getAllProductCategories: tryCatchWrapper(getAllProductCategories),
  getAllProductsByBloodType: tryCatchWrapper(getAllProductsByBloodType),
};