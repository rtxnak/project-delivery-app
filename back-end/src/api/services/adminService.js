import userModel from '../../database/models/users';

const getAllUsers = async () => {
  const allUsers = await userModel.findAll();

  return allUsers;
};

const deleteUser = async (id) => {
  const { id } = req.params.id;

  const User = await userModel.findBypK({ where: { id } });

  if (User) {
    
  }
}

module.exports = {
  getAllUsers,
}