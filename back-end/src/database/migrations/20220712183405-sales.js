'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalPrice: {
        field: 'total_price',
        type: Sequelize.DECIMAL(9,2)
      },
      deliveryAddress: {
        field: 'delivery_address',
        type: Sequelize.STRING
      },
      deliveryNumber: {
        field: 'delivery_number',
        type: Sequelize.STRING
      },
      saleDate: {
        field: 'sale_date',
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sellerId: {
        field: 'seller_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};