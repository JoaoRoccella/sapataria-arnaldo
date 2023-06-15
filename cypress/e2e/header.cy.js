// Testes de um elemento em várias páginas

const paginas = {
    'index.html': 'Home',
    'sobre-nos.html': 'Sobre Nós',
    'catalogo.html': 'Catálogo',
    'contato.html': 'Contato',
};

const urls = Object.entries(paginas);

const elemento = 'header';

describe(`Testes do elemento ${elemento} em todas as páginas`, () => {

    urls.forEach(([url, titulo]) => {
        
        context(`Página: ${titulo}`, () => {

            beforeEach(() => {
                cy.visit(url);
            });
            
            it(`Deve exitir um ${elemento} em ${titulo}`, () => {
                cy.get(elemento).should('exist');
            });

            it(`Deve ter um id igual a inicio`, () => {
                cy.get(elemento).should('have.id', 'inicio');
            });
        });
    })
    
});