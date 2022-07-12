module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      field: 'total_price',
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      field: 'delivery_address',
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      field: 'delivery_number',
    },
    saleDate: {
      type: DataTypes.DATE,
      field: 'sale_date',
    },
    status: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    sellerId: {
      type: DataTypes.INTEGER,
      field: 'seller_id',
    }
  },

    { tableName: 'Sales', timestamps: false });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
  };
  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, { foreignKey: 'sellerId', as: 'seller' });
  };
  return Sales;
};