const { Product, Category } = require('../models/product');
const tryCatchWrapper = require('../middlewares/tryCatchWrapper');

const getAllProductCategories = async (req, res) => {
  const result = await Category.find();
  res.json(result);
};

const getProductsByBloodType = async (req, res) => {
  const { blood } = req.user.userParams;
  const recommended = req.query.recommended;
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 20;

  const query = {};

  if (recommended !== undefined) {
    const isRecommended = JSON.parse(recommended);

    if (isRecommended) {
      query[`groupBloodNotAllowed.${blood}`] = false;
    } else {
      query[`groupBloodNotAllowed.${blood}`] = true;
    }
  }

  const totalProductsCount = await Product.countDocuments(query);
  const totalPage = Math.ceil(totalProductsCount / perPage);

  const filteredProductsByBloodType = await Product.find(query)
  .skip((page - 1) * perPage)
  .limit(perPage);

  res.json({
    totalProductsCount,
    totalPage,
    currentPahe: page,
    products: filteredProductsByBloodType,
  });
};

module.exports = {
  getAllProductCategories: tryCatchWrapper(getAllProductCategories),
  getProductsByBloodType: tryCatchWrapper(getProductsByBloodType),
};
