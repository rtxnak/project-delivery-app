module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProducts',
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
    { tableName: 'salesProducts', timestamps: false });
  SalesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'products',
      foreignKey: 'saleId',
      otherKey: 'productId',
      through: SalesProducts,
    });
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      foreignKey: 'productId',
      otherKey: 'saleId',
      through: SalesProducts,
    });
  };
  return SalesProducts;
};