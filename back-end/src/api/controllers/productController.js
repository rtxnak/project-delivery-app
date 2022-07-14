const productService = require('../services/productService');

const create = async (req, res) => {
  try {
    const { body } = req;
    const newProduct = await productService.create(body);
    return res.status(newProduct.code).json(newProduct.content);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const read = async (req, res) => {
  const products = await productService.read();
  return res.status(products.code).json(products.content);
};

const readOne = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.readOne(id);
    return res.status(product.code).json(product.content);
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { params: { id }, body } = req;    
    const productUp = await productService.update(id, body);
    return res.status(200).json({ message: productUp });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.destroy(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(404).json({ message: 'Not found' });
  }
};

module.exports = {
  create,
  read,
  readOne,
  update,
  destroy,
};
