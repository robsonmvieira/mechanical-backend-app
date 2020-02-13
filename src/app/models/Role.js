import Sequelize, { Model } from 'sequelize'

class Role extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        slug: Sequelize.STRING,
        description: Sequelize.STRING
      },
      {
        sequelize
      }
    )
    return this
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      through: 'users_roles',
      as: 'users',
      foreignKey: 'roles_id'
    })
  }
}

export default Role
