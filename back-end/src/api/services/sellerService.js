const { NotFound } = require('../utils/Erros');
const { sales, products } = require('../../database/models');

const getAll = async (sellerId) => {
  const salesResult = await sales.findAll({
    where: { sellerId },
    include: [
      { model: products, as: 'products' },
    ],
  });

  return { code: 200, content: { salesResult } };
};

async function getById(saleId) {
  const sale = await sales.findByPk(saleId,
    {
      include: [
        { model: products, as: 'products' },
      ],
    });

  console.log(sale.dataValues);
  if (!sale) throw new NotFound('Venda não encontrada');
  return sale;
}

const update = async (orderId, status) => {
  const saleUpdated = await sales.update(
    { status },
    { where: { id: orderId } },
  );
  const resultCode = saleUpdated[0];
  if (resultCode === 1) {
    return { code: 200, message: 'order status updated' };
  }
  if (resultCode === 0) {
    return { code: 400, message: 'order status did not updated' };
  }
};

module.exports = {
  getAll,
  update,
  getById,
};
