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
    this.hasMany(models.User, { foreignKey: 'user_id' })
  }
}

export default Role
