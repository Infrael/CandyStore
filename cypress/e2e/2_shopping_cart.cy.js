describe('Basket Page Tests', () => {
  let skipBeforeEach = false;

  beforeEach(() => {
    if (skipBeforeEach) return;
    cy.visit('/sweets');
  });

  it('TC_2.2.1: Candy Naming Check', () => {
    const mismatchedNames = [];

    cy.get('.card').then(($productCards) => {
      const total = $productCards.length;

      Cypress._.times(total, (index) => {
        cy.get('.card').eq(index).then(($el) => {
          const name = $el.find('h4.card-title').text().trim();

          cy.wrap($el).find('a.addItem').click();

          cy.visit('/basket');
          cy.get('#basketItems li.lh-condensed').first().find('h6.my-0').invoke('text').then((basketName) => {
            const basketNameClean = basketName.trim();
            if (basketNameClean !== name) {
              mismatchedNames.push({ productName: name, basketName: basketNameClean });
            }
          });

          cy.window().then((win) => {
            cy.stub(win, 'confirm').returns(true);
          });
          cy.contains('a.small', 'Delete Item').click();

          cy.visit('/sweets');
        });
      });
    }).then(() => {
      if (mismatchedNames.length) {
        throw new Error(`Found mismatches:\n${JSON.stringify(mismatchedNames, null, 2)}`);
      }
    });
  });

  it('TC_2.2.2: Add multiple items and verify quantities and total', () => {
    const itemsToAdd = 3;

    cy.addRandomItems('.card', itemsToAdd).then((addedItems) => {
      cy.get('a.nav-link[href="/basket"] .badge.badge-success').should('contain', itemsToAdd);

      cy.visit('/basket');
      cy.get('#basketItems').children().its('length').should('be.gt', 1);
      cy.get('#basketCount').should('contain', itemsToAdd);

      const basketItems = [];

      cy.get('#basketItems li.lh-condensed').each(($el) => {
        const name = $el.find('h6.my-0').text().trim();
        const price = parseFloat($el.find('span.text-muted').text().replace(/[^\d.]/g, ''));

        const quantity = parseInt($el.find('small.text-muted').text().replace(/[^\d.]/g, ''));
        Cypress._.times(quantity, () => {
          basketItems.push({ name, price });
        });
      }).then(() => {
        const entriesDoMatch = Cypress._.isEqual(basketItems, addedItems);

        if (entriesDoMatch) {
          cy.log('Items in basket match added items');
        } else {
          cy.wrap(basketItems).as('basketItems');
          cy.wrap(addedItems).as('addedItems');

          throw new Error('Items in basket do not match added items');
        }
      });
    });
  });

  it('TC_2.3.1: Remove an item from the basket', () => {
    cy.addRandomItems('.card', 2).then((addedItems) => {
      cy.visit('/basket');

      const isItemDuplicate = addedItems[0].name === addedItems[1].name ? true : false;
      if (isItemDuplicate) {
        cy.get('#basketItems li.lh-condensed').contains('Delete Item').click();
        cy.get('#basketCount').should('equal', '0');
      } else {
        const index = Math.floor(Math.random() * 2);

        cy.get('#basketItems li.lh-condensed')
          .contains(addedItems[index].name)
          .parents('li.lh-condensed')
          .contains('Delete Item')
          .click();

        cy.get('#basketItems li.lh-condensed').should('not.contain', addedItems[index].name);
      };
    });
  });

  it('TC_2.3.2: Clear entire basket', () => {
    cy.addRandomItems('.card', 2).then((addedItems) => {
      cy.visit('/basket');

      cy.get('#basketCount').invoke('text').should('equal', '2');

      cy.get('[onclick="emptyBasket();"]').click();

      cy.get('#basketCount').invoke('text').should('equal', '0');
    });
  });


  it('TC_2.4.1: Delivery Price is added correctly', () => {
    const shippingPrice = 1.99;

    cy.addRandomItems('.card', 1).then((addedItems) => {
      cy.visit('/basket');

      cy.get('#basketItems li:not(.lh-condensed) strong')
        .should('contain.text', parseFloat(addedItems[0].price));

      cy.get('label[for="exampleRadios2"]').click();

      cy.get('#basketItems li:not(.lh-condensed) strong')
        .should('contain.text', parseFloat(addedItems[0].price) + shippingPrice);

      cy.get('label[for="exampleRadios1"]').click();

      cy.get('#basketItems li:not(.lh-condensed) strong')
        .should('contain.text', parseFloat(addedItems[0].price));
    });
  });

  skipBeforeEach = true;
  it('TC_2.5.1: Submit Correctly the form and make a purchase', () => {
    cy.visit('/basket');

    cy.get('input#name').eq(0).type('Test');
    cy.get('input#name').eq(1).type('User');
    cy.get('#email').type('test@user.com');
    cy.get('#address').type('1234 Main St');
    cy.get('#address2').type('Apt 7B');
    cy.get('#country').select('United Kingdom');
    cy.get('#city').select('Cardiff');
    cy.get('#zip').type('CF10 1AA');

    cy.get('#cc-name').type('Test User');
    cy.get('#cc-number').type('4111111111111111');
    cy.get('#cc-expiration').type('12/30');
    cy.get('#cc-cvv').type('123');

    cy.get('button.btn-primary[type="submit"]').click();
  });
});
