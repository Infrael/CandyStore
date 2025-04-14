// describe('Account Login Scenario', () => {
//   beforeEach(() => {
//     cy.visit('/login');
//   });

//   describe('Positive Scenarios', () => {
//     const userEmail = "test@user.com"

//     it('Logs in successfully with valid credentials', () => {
//       cy.get('#exampleInputEmail').type(userEmail);
//       cy.get('#exampleInputPassword').type('testPassword123');

//       cy.contains('button', 'Login').click();

//       cy.contains("header p", `Welcome back ${userEmail}`);
//     });
//   });

//   describe('Negative Scenarios', () => {
//     it('Fails with wrong email format', () => {
//       cy.get('#exampleInputEmail').type('invalid@email');
//       cy.get('#exampleInputPassword').type('validPassword123');
//       cy.contains('button', 'Login').click();
//       cy.contains('Please enter a valid email address');
//     });

//     it('Fails with empty email', () => {
//       cy.get('#exampleInputPassword').type('validPassword123');
//       cy.contains('button', 'Login').click();
//       cy.contains('Please enter a valid email address');
//     });

//     it('Fails with empty password', () => {
//       cy.get('#exampleInputEmail').type('valid@email.com');
//       cy.contains('button', 'Login').click();
//       cy.contains('Please enter a valid password');
//     });
//   });
// });

describe("Account page displays Basket correctly", () => {
  
  it('Adds item to basket', () => {
    cy.visit('/sweets');
    cy.clickRandom('.card a.addItem');
    
  
    cy.visit('/00efc23d-b605-4f31-b97b-6bb276de447e.html');
    cy.get('.sweet-item').first().find('button').click();
    cy.get('.basket-count').should('contain', '1');
  });

  it('Removes item from basket', () => {
    cy.visit('/basket');
    cy.get('.remove-item').first().click();
    cy.get('.basket-count').should('contain', '0');
  });
});
