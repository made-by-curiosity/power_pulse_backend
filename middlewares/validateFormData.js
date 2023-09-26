const validateFormData = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ error: "File is missing in the request." });
  }
  next();
};

module.exports = validateFormData;
