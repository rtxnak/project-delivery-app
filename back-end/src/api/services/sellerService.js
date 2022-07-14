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

module.exports = {
  getAll,
};
