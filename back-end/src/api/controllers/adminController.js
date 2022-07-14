const adminService = require('../services/adminService');

const admin = async (_req, res ) => { 
  try {
    const allUsers = adminService.allUsers();
    
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = {
  admin,
};