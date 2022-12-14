const sellerService = require('../services/sellerService');
const { ErrorBase } = require('../utils/Erros');

const getAllSales = async (req, res) => {
  try {
    const { sellerId } = req.body;
    const result = await sellerService.getAll(sellerId);
    if (result.code === 200) {
      const { code, content } = result;
      return res.status(code).json(content);
    }
    const { code, message } = result;
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateSaleStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    const result = await sellerService.update(orderId, status);
    const { code, message } = result;
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const findSale = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await sellerService.getById(id);
    return res.status(200).json(sale);
  } catch (error) {
    if (error instanceof ErrorBase) {
      return res.status(error.code).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllSales,
  updateSaleStatus,
  findSale,
};
