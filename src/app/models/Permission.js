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
}

export default Permission
