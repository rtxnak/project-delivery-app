module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
  },

    { tableName: 'users', timestamps: false },
  );

  Users.associate = (models) => {
    Users.hasMany(models.sales, { as: 'sales', foreignKey: 'id' });
  }

  return Users;
};