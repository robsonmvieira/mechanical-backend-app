module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('budgets', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, notNullable: true },
      license_plate: {
        type: Sequelize.STRING,
        notNullable: true,
        unique: true
      },
      mechanical_id: {
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      doBy: {
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      description: {
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
    return queryInterface.dropTable('budgets')
  }
}
