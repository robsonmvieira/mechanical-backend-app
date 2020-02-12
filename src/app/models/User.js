import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        password_hash: Sequelize.VIRTUAL
      },
      {
        sequelize
      }
    )
    this.addHook('beforeSave', async user => {
      if (user.password_hash) {
        user.password = await bcrypt.hashSync(user.password_hash, 8)
      }
    })
    return this
  }

  static associate(models) {
    this.hasMany(models.Role, { foreignKey: 'user_id' })
  }
}
export default User
