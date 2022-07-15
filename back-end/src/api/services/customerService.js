const { NotFound } = require('../utils/Erros');
const { sales, salesProducts, users, products } = require('../../database/models');

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

async function getById(saleId) {
  const sale = await sales.findByPk(saleId,
    {
      include: [
        { model: products, as: 'products' },
        { model: users, as: 'seller', attributes: ['name', 'id'] },
      ],
    });

  console.log(sale.dataValues);
  if (!sale) throw new NotFound('Venda não encontrada');
  return sale;
}

const update = async (saleId, status) => {
  const saleUpdated = await sales.update(
    { status },
    { where: { id: saleId } },
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
  create,
  getById,
  update,
};
