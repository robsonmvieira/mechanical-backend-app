import { Router } from 'express'
import Role from './app/controllers/RoleController'
import Permission from './app/controllers/PermissionController'
import UserController from './app/controllers/UserController'

const routes = new Router()

routes.post('/api/roles', UserController.store)
routes.get('/api/roles', UserController.index)
routes.get('/api/permissions', Permission.index)
routes.post('/api/permissions', Permission.store)
routes.get('/api/roles', Role.index)
routes.post('/api/roles', Role.store)

export default routes
