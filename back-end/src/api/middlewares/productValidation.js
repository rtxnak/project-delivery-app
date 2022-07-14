module.exports = {
  isValidNameProduct(req, res, next) {
    const { name } = req.body;
    if (!name) return res.status(400).json('"name" is required!');
    next();
  },
};