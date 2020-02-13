module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_permissions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        notnullable: true,
        primaryKey: true
      },
      users_id: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      permissions_id: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        allowNull: false,
        references: {
          model: 'permissions',
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('users_permissions')
  }
}
