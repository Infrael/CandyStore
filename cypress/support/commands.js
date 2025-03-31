Cypress.Commands.add('checkIcon', (name, url = name, file = `${name}.png`) => {
    cy.get(`a[href*="${url}"] img[alt="${name}"]`)
      .should('be.visible')
      .and('have.attr', 'src')
      .and('include', file);
  });

Cypress.Commands.add('checkImageLoaded', (selector, imgSelector) => {
    cy.get(selector).each(($el) => {
        cy.wrap($el)
        .find(imgSelector)
        .should('be.visible')
        .and('have.prop', 'naturalWidth')
        .and('be.greaterThan', 0);
    });
});
