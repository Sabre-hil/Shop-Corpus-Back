/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Furniture', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      made: {
        type: Sequelize.STRING,
      },
      facade: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      discount: {
        type: Sequelize.BOOLEAN,
      },
      price_discount: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.STRING,
      },
      tabletop: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Furniture');
  },
};
