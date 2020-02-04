import Role from '../models/Role'

class RoleController {
  async store(req, res) {
    const data = req.body
    const role = await Role.create(data)
    return res.status(200).json(role)
  }

  async index(req, res) {
    const roles = await Role.findAll()
    return res.status(200).json(roles)
  }
}

export default new RoleController()
