describe('Testes da navbar', () => {
    
    before(() => {
        cy.log('Iniciando testes da Navbar');
    });

    beforeEach(() => {
        cy.visit('/index.html');
    });

    it('Deve ter a classe .navbar', () => {

        cy.get('nav').should('have.class', 'navbar');
        
    });

    it('Deve ter um atributo href válido para cada página', () => {

        cy.get('[data-test=home]').should('have.attr', 'href', './index.html');
        cy.get('[data-test=sobre-nos]').should('have.attr', 'href', './sobre-nos.html');
        cy.get('[data-test=catalogo]').should('have.attr', 'href', './catalogo.html');
        cy.get('[data-test=login]').should('have.attr', 'href', './login.html');
        cy.get('[data-test=contato]').should('have.attr', 'href', './contato.html');

    });
});