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
      as: 'products',
      foreignKey: 'saleId',
      otherKey: 'productId',
      through: SalesProducts,
    });
    models.Products.belongsToMany(models.Sales, {
      as: 'sales',
      foreignKey: 'productId',
      otherKey: 'saleId',
      through: SalesProducts,
    });
  };
  return SalesProducts;
};