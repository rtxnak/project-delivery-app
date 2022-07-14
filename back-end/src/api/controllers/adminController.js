const adminService = require('../services/adminService');

const admin = async (_req, res ) => { 
  try {

    const allUsers = await adminService.getAllUsers();
    
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const delUser = await adminService.deleteUser(Number(id));
      return res.status(code).json(message);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  admin,
  deleteUser,
};