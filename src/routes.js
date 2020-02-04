import { Router } from 'express'
import Role from './app/controllers/RoleController'
import Permission from './app/controllers/PermissionController'

const routes = new Router()

routes.get('/api/permissions', Permission.index)
routes.get('/api/roles', Role.index)

export default routes
