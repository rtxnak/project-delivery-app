'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [
        {
          total_price: 999,
          delivery_address: 'rua sem asfalto',
          delivery_number: '111',
          sale_date: '13-07-22 18:00:00',
          status: 'Pendente',
          user_id: 3,
          seller_id: 2,
        },
        {
          total_price: 444,
          delivery_address: 'rua sem calçada',
          delivery_number: '1',
          sale_date: '14-07-22 18:00:00',
          status: 'Preparando',
          user_id: 3,
          seller_id: 2,
        },
      ]);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
