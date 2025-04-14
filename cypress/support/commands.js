Cypress.Commands.add('performImageChecks', (selector, imgSelector) => {
    if (imgSelector) {
        cy.get(selector).each(($el) => {
        cy.wrap($el)
        .find(imgSelector).assertImageIsLoaded();
        });
    } else {
        cy.get(selector).assertImageIsLoaded();
    }
});

Cypress.Commands.add('assertImageIsLoaded', { prevSubject: 'element' }, (subject) => {
    cy.wrap(subject)
    .should('be.visible')
    .and('have.prop', 'naturalWidth')
    .and('be.greaterThan', 0);
});

Cypress.Commands.add('validateSocialElement', (attribute) => {
    const socialName = attribute.toLowerCase();    
    const platformSelector = `img[alt="${socialName}"]`;
    
    cy.get(platformSelector).should('have.attr', 'src').and('include', socialName);
    cy.get(platformSelector).should('exist').and('be.visible')
    cy.get(platformSelector).assertImageIsLoaded();

    cy.get(platformSelector).parent('a').should('have.attr', 'href').and('include', socialName);
    
});

Cypress.Commands.add('clickRandom', (elementSelector) => {
    cy.get(elementSelector).then($items => {
      const randomIndex = Math.floor(Math.random() * $items.length);
      const selected = $items[randomIndex];
       
    });
  });
  