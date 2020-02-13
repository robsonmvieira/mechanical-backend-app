module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_roles', {
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
      roles_id: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id'
        }
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
    return queryInterface.dropTable('users_roles')
  }
}
