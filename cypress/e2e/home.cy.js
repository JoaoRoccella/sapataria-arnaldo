describe('Testes na Home', () => {
  it('Abre o diretório', () => {
    
    cy.visit('/');
    
  })

  it('Abre a página Index', () => {
    
    cy.visit('/index.html');
    
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Título da página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('.page-title').should('have.text', 'Sapataria do Arnaldo');
    cy.get('.page-title').should('have.class', 'page-title');
    cy.get('.page-subtitle').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Subtítulo da página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('.page-subtitle').should('have.text', 'Desde 1940 consertando o seu sapato');
    /* ==== End Cypress Studio ==== */
  });
})