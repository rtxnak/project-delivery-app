const { Products } = require('../../database/models');

const create = async (payload) => {
  const newProduct = await Products.create(payload);
  return { code: 201, content: newProduct };
};

const read = async () => {
  const products = await Products.findAll();
  return { code: 200, content: products };
};

const readOne = async (id) => {
  const product = await Products.findOne({ where: { id } });
  return { code: 200, content: product };
};

const update = async (id, payload) => {
  const product = await Products.update({ payload }, { where: { id } });
  return { code: 204, content: product };
};

const destroy = async (id) => {
  await Products.destroy({ where: { id } });
};

module.exports = {
  create,
  read,
  readOne,
  update,
  destroy,
};