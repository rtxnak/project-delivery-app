module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('SalesProducts',
      [
        {
          product_id: 11,
          sale_id: 1,
          quantity: 6,
        },
        {
          product_id: 5,
          sale_id: 1,
          quantity: 1,
        },
        {
          product_id: 3,
          sale_id: 2,
          quantity: 1,
        },
      ]);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('SalesProducts', null, {});
  },
};