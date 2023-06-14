describe('Testes na Home', () => {
  it('Abre a página', () => {
    
    cy.visit('/')

  })

  beforeEach(() => {
    cy.visit('/index.html');
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Título da página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="page-title"]').should('have.text', 'Sapataria do Arnaldo');
    cy.get('[data-test="page-title"]').should('have.class', 'page-title');
    cy.get('[data-test="page-title"]').should('be.visible');
    cy.get('[data-test="page-title"]').should('have.css', 'color', 'rgb(167, 82, 7)');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Subtítulo da página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="page-subtitle"]').should('have.text', 'Desde 1945 consertando o seu sapato');
    cy.get('[data-test="page-subtitle"]').should('have.class', 'page-subtitle');
    cy.get('[data-test="page-subtitle"]').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Rodapé da página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.footer').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  it('Email no rodapé', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.email-contato').should('have.text', 'contato@sa.com.br');
    cy.get('.email-contato').should('have.class', 'email-contato');
    cy.get('.email-contato').should('be.visible');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.email-contato').should('have.text', 'contato@sa.com.br');
    /* ==== End Cypress Studio ==== */
  });
})