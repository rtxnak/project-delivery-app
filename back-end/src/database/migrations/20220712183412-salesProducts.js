'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SalesProducts', {
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      
      sale_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sales',
          key: 'id',
        },
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantity: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('SalesProducts');
  }
};