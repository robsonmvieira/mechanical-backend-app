module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'roles',
      [
        {
          name: 'adminstrative assistent level 1',
          slug: 'Auxiliar Administrativo I',
          updated_at: new Date(),
          created_at: new Date(),
          description:
            'Como auxiliar adminstrativo I Você pode imprimir informações do orçamento solicitado, pode realizar orçamento,gerênciar a fila de atendimento'
        },
        {
          name: 'mechanical',
          slug: 'mecânico',
          updated_at: new Date(),
          created_at: new Date(),
          description:
            'O Mecânico é o funcionário responsável por dar manutenção no carro do cliente'
        },
        {
          name: 'adminstrative assistent level II',
          slug: 'Auxiliar Administrativo II',
          updated_at: new Date(),
          created_at: new Date(),
          description:
            'Como auxiliar adminstrativo II  Você é responsável por auxiliar e orientear os novos profissionais que entram na empresa, bem como pariticpar de reunião de resultados'
        },
        {
          name: 'owner',
          slug: 'priprietário/dono',
          updated_at: new Date(),
          created_at: new Date(),
          description:
            'O Proprietário é o dono da Oficina. Ele tem permissão para todas as ações e decisões'
        }
      ],
      {}
    )
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('roles', null, {})
  }
}
