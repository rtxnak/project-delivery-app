import userModel from '../../database/models/users';

const getAllUsers = async () => {
  const allUsers = await userModel.findAll();

  return allUsers;
};

module.exports = {
  getAllUsers,
}