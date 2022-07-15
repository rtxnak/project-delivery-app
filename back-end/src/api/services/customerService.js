const { NotFound } = require('../utils/Erros');
const { sales, salesProducts, users } = require('../../database/models');

const validationIds = async (userId, sellerId) => {
  const ifUserExist = await users.findOne({ where: { id: userId } });
  const ifSellerExist = await users.findOne({ where: { id: sellerId, role: 'seller' } });
  if (!ifUserExist) throw new NotFound('Usuário não cadastrado');
  if (!ifSellerExist) throw new NotFound('Vendedor não cadastrado');
};

async function create(saleInformation) {
  const {
    totalPrice, sellerId, deliveryAddress, deliveryNumber, userId,
    productSalesArray, // array de objeto com productId e
  } = saleInformation;

  await validationIds(userId, sellerId);

  const saleDate = Date.now();
  const status = 'Pendente';

  const sale = await sales.create({
    totalPrice, deliveryAddress, deliveryNumber, saleDate, status, userId, sellerId,
  });

  const saleId = sale.dataValues.id;
  productSalesArray.forEach(async (productSale) => {
    const { productId, quantity } = productSale;
    
    await salesProducts.create({ productId, saleId, quantity });
  });
}

module.exports = {
  create,
};
