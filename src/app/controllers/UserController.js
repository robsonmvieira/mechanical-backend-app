import User from '../models/User'
import Roles from '../models/Role'

class UserController {
  async store(req, res) {
    const data = req.body
    const user = await User.create(data)
    // await user.setRoles(1)
    // await user.save()
    return res.status(201).json(user)
  }

  async index(req, res) {
    const users = await User.findAll({
      include: [{ model: Roles, as: 'roles', through: { attributes: [] } }]
    })
    return res.status(200).json(users)
  }

  async one(req, res) {
    const { id } = req.params
    const user = await User.findOne({ where: { id }, include: Roles })
    return res.status(200).json(user)
  }
}

export default new UserController()
