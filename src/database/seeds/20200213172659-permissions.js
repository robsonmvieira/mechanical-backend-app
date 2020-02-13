module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'permissions',
      [
        {
          name: 'can read budgets',
          slug: 'pode acessar orçamento',
          updated_at: new Date(),
          created_at: new Date(),
          description: 'Você pode criar um orçamento'
        },
        {
          name: 'can create budgets',
          slug: 'pode criar orçamento',
          updated_at: new Date(),
          created_at: new Date(),
          description: 'Você pode criar um orçamento'
        },
        {
          name: 'can edit budgets',
          slug: 'pode editar orçamento',
          updated_at: new Date(),
          created_at: new Date(),
          description: 'Você pode criar um orçamento'
        },
        {
          name: 'can delete budgets',
          slug: 'pode deletar orçamento',
          updated_at: new Date(),
          created_at: new Date(),
          description: 'Você pode criar um orçamento'
        }
      ],
      {}
    )
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('permissions', null, {})
  }
}
