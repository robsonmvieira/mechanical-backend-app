import Sequelize from 'sequelize'

import databaseConfig from '../config/database'
import User from '../app/models/User'
import Role from '../app/models/Role'
import Permission from '../app/models/Permission'
import Budget from '../app/models/Budget'

const models = [User, Role, Permission, Budget]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

export default new Database()
