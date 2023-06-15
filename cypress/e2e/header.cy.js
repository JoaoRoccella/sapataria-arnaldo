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
        it(`Deve exitir um ${elemento} em ${titulo}`, () => {
            cy.visit(url);
            cy.get(elemento).should('exist');
        });
    })
    
});