describe('Account Login Scenario', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  describe('Positive Scenarios', () => {
    const userEmail = "test@user.com"

    it('TC_3.1.1: Logs in successfully with valid credentials', () => {
      cy.login(userEmail, 'testPassword123');
      cy.contains("header p", `Welcome back ${userEmail}`);
    });
  });

  describe('Negative Scenarios', () => {
    it('TC_3.2.1: Fails with wrong email format', () => {
      cy.get('#exampleInputEmail').type('invalid@email');
      cy.get('#exampleInputPassword').type('validPassword123');
      cy.contains('button', 'Login').click();
      cy.contains('Please enter a valid email address');
    });

    it('TC_3.2.2: Fails with empty email', () => {
      cy.get('#exampleInputPassword').type('validPassword123');
      cy.contains('button', 'Login').click();
      cy.contains('Please enter a valid email address');
    });

    it('TC_3.2.3: Fails with empty password', () => {
      cy.get('#exampleInputEmail').type('valid@email.com');
      cy.contains('button', 'Login').click();
      cy.contains('Please enter a valid password');
    });
  });
});

describe("Account page displays Basket correctly", () => {

  it('TC_3.3.1: Correctly displays added item', () => {
    cy.visit('/sweets');

    cy.addRandomItems('.card').then((addedItems) => {
      const { name, price } = addedItems[0];
        
      cy.visit('/login');
      cy.login();

      cy.get('#basketItems .list-group-item').first().then($items => {
        const itemName = $items.find('h6.my-0').text().trim();
        const itemPrice = parseFloat($items.find('span.text-muted').text().replace(/[^\d.]/g, ''));

        expect(itemName).to.equal(name);
        expect(itemPrice).to.equal(price);
      });
    });
  });
});
