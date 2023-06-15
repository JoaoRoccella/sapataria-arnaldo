describe('Testes da Navbar', () => {
    
    context('Mobile', () => {
        
        beforeEach(() => {
            cy.viewport(480, 750);
            cy.visit('/index.html');
        });
    
        it('Testa se as classes estão corretas', () => {
            cy.get('nav').should('have.class', 'navbar');
            cy.get('.logo').should('be.visible');
            cy.isInViewport('[data-test=login]');
        });

    });

    context('Desktop', () => {
        
        beforeEach(() => {
            cy.viewport(1600, 900);
            cy.visit('/index.html');
        });
    
        it('Testa se as classes estão corretas', () => {
            cy.get('nav').should('have.class', 'navbar');
            cy.get('.logo').should('be.visible');
        });
        
    });

    it('Deve ter o href correspondente', () => {
        cy.visit('/index.html');
        cy.get('[data-test=home]').should('have.attr', 'href', './index.html');
        cy.get('[data-test=sobre-nos]').should('have.attr', 'href', './sobre-nos.html');
        cy.get('[data-test=catalogo]').should('have.attr', 'href', './catalogo.html');
        cy.get('[data-test=contato]').should('have.attr', 'href', './contato.html');
        cy.get('[data-test=login]').should('have.attr', 'href', './login.html');
        cy.isInViewport('[data-test=login]');
    });

    after(() => {
        cy.log('Fim dos testes da Navbar');
    });

});