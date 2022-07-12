module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(4,2)
    },
    urlImage: {
      type: DataTypes.STRING,
      field: 'url_image',
    },
  },
    { tableName: 'Products', timestamps: false }
  );
  
  return Products;
};