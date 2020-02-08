module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('budgets', { id: Sequelize.INTEGER })
  },

  down: queryInterface => {
    return queryInterface.dropTable('budgets')
  }
}
