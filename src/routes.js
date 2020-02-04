import { Router } from 'express'
import Role from './app/controllers/RoleController'

const routes = new Router()

routes.get('/roles', Role.index)
routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }))

export default routes
