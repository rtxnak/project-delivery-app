const { tokenGeneratorDecode } = require('../utils/tokenGenerator');

const userAuthorization = (req, _res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    if (!authorization) throw new Error('nao autorizado');
    
    const user = tokenGeneratorDecode(authorization);
    if (!user) throw new Error('nao autorizado');
    req.user = user;
    
    next();
  } catch (error) {
    console.log('userAuthorization', error.message);
    next(error);
  }
};

module.exports = {
  userAuthorization,
};
