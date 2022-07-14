const { Products } = require('../../database/models');
const { NotFound } = require('../utils/Erros');

const create = async (payload) => {
  const { name, price, urlImage } = payload;
  const newProduct = await Products
    .create({
      name, price, urlImage,
    });
  return { code: 201, content: newProduct };
};

const read = async () => {
  const products = await Products.findAll();
  return { code: 200, content: products };
};

const readOne = async (id) => {
  const product = await Products.findOne({ where: { id } });
  if (!product) throw new NotFound();
  return { code: 200, content: product };
};

const update = async (id, payload) => {
  const { name, price, urlImage } = payload;

  const isValidId = await readOne(id);

  if (!isValidId) throw new NotFound(id);

  const [product] = await Products.update({ name, price, urlImage }, { where: { id } });

  console.log(product);

  if (product) return 'Produto atualizado com sucesso!';
  
  return 'O produto já está atualizado!';
};

const destroy = async (id) => {
  const productDestroy = await Products.destroy({ where: { id } });
  if (!productDestroy) throw new NotFound();
};

module.exports = {
  create,
  read,
  readOne,
  update,
  destroy,
};