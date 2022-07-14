const { Users } = require('../../database/models');

const getAllUsers = async () => {
  const allUsers = await userModel.findAll();

  return allUsers;
};

const deleteUser = async (id) => {
  const { id } = req.params.id;

  const userEmail = await Users.findByPk(Number(id));

  if (userEmail) {
    await Users.destroy({
      where: {
        email: userEmail.email,
      },
    });
  };
};

module.exports = {
  getAllUsers,
  deleteUser,
}