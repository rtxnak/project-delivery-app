const loginService = require('../services/loginService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginService.login(email, password);
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

module.exports = {
  login,
};