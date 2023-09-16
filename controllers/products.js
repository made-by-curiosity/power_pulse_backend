const Product = require('../models/product'); 

const getAllProductCategories = async (req, res) => {
        const result = await Product.find();
        console.log(result); 
        console.log(Product)
        res.json(result);
}

module.exports = {
  getAllProductCategories,
};