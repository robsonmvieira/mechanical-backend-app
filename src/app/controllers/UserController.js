import User from '../models/User'

class UserController {
  async store(req, res) {
    const data = req.body
    const user = await User.create(data)
    return res.status(201).json(user)
  }

  async index(req, res) {
    const users = await User.findAll()
    return res.status(200).json(users)
  }

  async one(req, res) {
    const { id } = req.params
    const user = await User.findByPk(id)
    user.roles.push(2)
    await user.save()
    console.log(typeof user.roles)
    return res.status(200).json(typeof user.roles)
  }
}

export default new UserController()
