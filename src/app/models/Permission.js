import Sequelize, { Model } from 'sequelize'

class Permission extends Model {
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
      through: 'users_permissions',
      as: 'users',
      foreignKey: 'permissions_id'
    })
  }
}

export default Permission
