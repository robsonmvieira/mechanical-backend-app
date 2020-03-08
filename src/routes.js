import { Router } from 'express'
import Role from './app/controllers/RoleController'
import Permission from './app/controllers/PermissionController'
import UserController from './app/controllers/UserController'
import BudgetController from './app/controllers/BudgetsController'
import SessionController from './app/controllers/SessionController'

const routes = new Router()

routes.post('/api/users', UserController.store)
routes.get('/api/users', UserController.index)
routes.get('/api/users/:id', UserController.one)
routes.get('/api/permissions', Permission.index)
routes.post('/api/permissions', Permission.store)
routes.get('/api/roles', Role.index)
routes.post('/api/roles', Role.store)
routes.get('/api/budgets', BudgetController.index)
routes.post('/api/budgets', BudgetController.store)
routes.post('/api/login', SessionController.login)

export default routes
