import Budget from '../models/Budget'

class BudgetController {
  async store(req, res) {
    const data = req.body
    const budget = await Budget.create(data)
    return res.status(201).json(budget)
  }

  async index(req, res) {
    const budgets = await Budget.findAll()
    return res.status(200).json(budgets)
  }
}
export default new BudgetController()
