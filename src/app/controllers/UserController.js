import User from '../models/User'

class UserController {
  async store(req, res) {
    const data = req.body
    data.roles = [1]
    const user = await User.create(data)
    return res.status(201).json(user)
  }

  async index(req, res) {
    const users = await User.findAll()
    return res.status(200).json(users)
  }
}

export default new UserController()
