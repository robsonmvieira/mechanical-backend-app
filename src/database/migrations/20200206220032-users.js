module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        notnullable: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        notnullable: true,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        notnullable: true
      },
      password: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('users')
  }
}
