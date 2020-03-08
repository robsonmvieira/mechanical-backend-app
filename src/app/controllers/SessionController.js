import jwt from 'jsonwebtoken'
import User from '../models/User'

const secret = process.env.APP_SECRET
class SessionController {
  async login(req, res) {
    const { email, password } = req.body
    const userExist = await User.findOne({ where: { email } })

    if (!userExist) {
      return res.status(401).json({ message: "email or senha doesn't match" })
    }
    const matchPassword = await userExist.checkPassword(password)
    if (!matchPassword) {
      return res.status(401).json({ message: "email or senha doesn't match" })
    }
    const token = jwt.sign({ id: userExist.id }, secret, { expiresIn: '1d' })
    return res.status(200).json(token)
  }
}

export default new SessionController()
