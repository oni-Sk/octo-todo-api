'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
        await queryInterface.addColumn("todos", "statut", {
            type: Sequelize.STRING,
            defaultValue: "EN_COURS",
            allowNull: false
          },
          { transaction: t })
      await queryInterface.sequelize.query(`
            UPDATE todos 
            SET statut = 'EN_RETARD'
            WHERE date_echeance < NOW()`,
          { transaction: t })
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('todos', 'statut')
  }
};
