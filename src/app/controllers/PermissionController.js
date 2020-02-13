import Permission from '../models/Permission'
import User from '../models/User'

class PermissionController {
  async store(req, res) {
    const data = req.body
    const permission = await Permission.create(data)
    return res.status(201).json(permission)
  }

  async index(req, res) {
    const permissions = await Permission.findAll({
      include: [
        {
          model: User,
          as: 'users',
          through: { attributes: [] }
        }
      ]
    })
    return res.status(200).json(permissions)
  }
}
export default new PermissionController()
