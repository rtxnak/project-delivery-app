const { Sales, Products } = require('../../database/models');

const getAll = async (sellerId) => {
  const sales = await Sales.findAll({
    where: { sellerId },
    include: [
      { model: Products, as: 'products' },
    ],
  });

  return { code: 200, content: { sales } };
};

const update = async (orderId, status) => {
  const saleUpdated = await Sales.update(
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
};
