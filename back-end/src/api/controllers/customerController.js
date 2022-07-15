const customerService = require('../services/customerService');
const { ErrorBase } = require('../utils/Erros');

const createSale = async (req, res) => {
  try {
    const saleInformation = req.body;
    const result = await customerService.create(saleInformation);
    return res.status(200).json({ result });
  } catch (error) {
    if (error instanceof ErrorBase) {
      return res.status(error.code).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

const findSale = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await customerService.getById(id);
    return res.status(200).json(sale);
  } catch (error) {
    if (error instanceof ErrorBase) {
      return res.status(error.code).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

const updateSaleStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    const result = await customerService.update(id, status);
    const { code, message } = result;
    return res.status(code).json({ message });
  } catch (error) {
    if (error instanceof ErrorBase) {
      return res.status(error.code).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSale,
  findSale,
  updateSaleStatus,
};