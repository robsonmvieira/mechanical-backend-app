import Sequelize, { Model } from 'sequelize'

class Budget extends Model {
  static init(sequelize) {
    super.init(
      {
        mechanical_id: Sequelize.INTEGER,
        doBy: Sequelize.INTEGER,
        description: Sequelize.STRING
      },
      { sequelize }
    )
    return this
  }
}

export default Budget
