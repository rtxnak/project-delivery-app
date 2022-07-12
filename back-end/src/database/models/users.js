module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
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

    { tableName: 'Users', timestamps: false },
  );

  Users.associate = (models) => {
    Users.hasMany(models.Sales, { as: 'Sales', foreignKey: 'id' });
  }

  return Users;
};