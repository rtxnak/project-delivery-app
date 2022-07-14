module.exports = {
  isValidNewProduct(req, res, next) {
    const { name, price, urlImage } = req.body;
    if (!name) return res.status(400).json('"name" is required!');
    if (!price) return res.status(400).json('"price" is required!');
    if (!urlImage) return res.status(400).json('"urlImage" is required!');
    next();
  },
  
};