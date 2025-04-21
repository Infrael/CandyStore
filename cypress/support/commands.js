import { users } from './users';


Cypress.Commands.add('assertImageIsLoaded', { prevSubject: 'element' }, (subject) => {
    cy.wrap(subject)
        .should('be.visible')
        .and('have.prop', 'naturalWidth')
        .and('be.greaterThan', 0);
});

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

Cypress.Commands.add('validateSocialElement', (attribute) => {
    const socialName = attribute.toLowerCase();
    const platformSelector = `img[alt="${socialName}"]`;

    cy.get(platformSelector).should('have.attr', 'src').and('include', socialName);
    cy.get(platformSelector).should('exist').and('be.visible')
    cy.get(platformSelector).assertImageIsLoaded();

    cy.get(platformSelector).parent('a').should('have.attr', 'href').and('include', socialName);

});

Cypress.Commands.add('login', (email = users.testUser.email, password = users.testUser.password) => {
    cy.get("#exampleInputEmail").type(email);
    cy.get("#exampleInputPassword").type(password);
    cy.contains("button", "Login").click();
});

Cypress.Commands.add('addRandomItems', (elementSelector, count = 1) => {
    const addedItems = [];
  
    return cy.wrap([...Array(count)]).each(() => {
      return cy.get(elementSelector).then($items => {
        const index = Math.floor(Math.random() * $items.length);
        const $selected = $items[index];
  
        cy.wrap($selected).contains('Add to Basket').click();
  
        const name = $selected.querySelector('.card-title')?.innerText.trim();
        const price = parseFloat(
          $selected.querySelector('.text-muted')?.innerText.replace(/[^\d.]/g, '')
        );
  
        addedItems.push({ name, price });
      });
    }).then(() => cy.wrap(addedItems));
});
  