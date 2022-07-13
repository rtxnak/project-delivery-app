const registerService = require('../services/registerService');

const register = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;
    const result = await registerService.create(name, email, role, password);
    if (result.code === 201) {
      const { code, content } = result;
      return res.status(code).json(content);
    }
    const { code, message } = result;
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  register,
};