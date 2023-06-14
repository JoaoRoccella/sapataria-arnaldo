const sizes = [[480, 750], [600, 768], [1024, 768]]

describe('Logo na Home', () => {
  sizes.forEach((size) => {
    // make assertions on the logo using
    // an array of different viewports
    it(`Deve exibir a logo em tela de ${size}`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }

      cy.visit('/')
      cy.get('.logo').should('be.visible')
    })
  })
})