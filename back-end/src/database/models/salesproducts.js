module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts',
    {
      quantity: DataTypes.INTEGER,
      productId: {
        type: DataTypes.INTEGER,
        field: 'product_id',
      },
      saleId: {
        type: DataTypes.INTEGER,
        field: 'sale_id',
      }
    },
    { tableName: 'SalesProducts', timestamps: false });
  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products',
      through: SalesProducts,
    });
    models.Products.belongsToMany(models.Sales, {
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'saleId',
      through: SalesProducts,
    });
  };
  return SalesProducts;
};