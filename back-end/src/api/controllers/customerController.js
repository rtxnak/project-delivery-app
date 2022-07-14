const customerService = require('../services/customerService');

const createSale = async (req, res) => {
  try {
    const saleInformation = req.body;
    const result = await customerService.create(saleInformation);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createSale,
};