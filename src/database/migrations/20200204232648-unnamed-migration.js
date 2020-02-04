module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('permissions', {
      id: {
        type: Sequelize.INTEGER,
        notNullable: false,
        autoIncremente: true
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        notNullable: true
      },
      slug: {
        type: Sequelize.STRING,
        unique: true,
        notNullable: true
      },
      description: {
        type: Sequelize.STRING,
        notNullable: true
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATE.now
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATE.now
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('permissions')
  }
}
