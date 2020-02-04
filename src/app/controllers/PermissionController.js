import Permission from '../models/Permission'

class PermissionController {
  async create(req, res) {
    const data = req.body
    const permission = await Permission.create(data)
    return res.status(201).json(permission)
  }

  async index(req, res) {
    const permissions = await Permission.findAll()
    return res.status(200).json(permissions)
  }
}
export default new PermissionController()
