const { isValidObjectId } = require('mongoose');
const { BadRequest }  = require('http-errors');

const isValidId = (req, res, next) => {
	const { id } = req.params;
  if (!isValidObjectId(id)) next(BadRequest(`${id} is not correct id format`));
  next();
};

module.exports = isValidId;
