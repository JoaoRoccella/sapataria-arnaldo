describe('Formulário de contato', () => {
    it('Deve preencher os campos do formulário', () => {
        cy.visit('/contato.html');
        cy.get('[data-test="name"]').should('have.id', 'name');
        cy.get('[data-test="name"]').should('be.enabled');
        cy.get('[data-test="name"]').should('have.attr', 'type', 'text');
        cy.get('[data-test=name]').type('Joao Marcos');
    });
});