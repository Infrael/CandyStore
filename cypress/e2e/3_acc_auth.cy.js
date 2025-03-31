describe('Positive Account Login Scenario', () => {

  beforeEach(() => {
    cy.visit('/login');
  });

  describe('Positive Login', () => {
    it('Logs in successfully with valid credentials', () => {
      cy.get('#exampleInputEmail').type('test@user.com');
      cy.get('#exampleInputPassword').type('testPassword123');

      cy.contains('button', 'Login').click();

      cy.contains("header p", 'Welcome back test@user.com');
    });
  });

  describe('Negative Account Login Scenarios', () => {
    it('Fails with wrong email format', () => {
      cy.get('#exampleInputEmail').type('invalid@email');
      cy.get('#exampleInputPassword').type('validPassword123');
      cy.contains('button', 'Login').click();
      cy.contains('Please enter a valid email address');
    });

    it('Fails with empty email', () => {
      cy.get('#exampleInputPassword').type('validPassword123');
      cy.contains('button', 'Login').click();
      cy.contains('Please enter a valid email address');
    });

    it('Fails with empty password', () => {
      cy.get('#exampleInputEmail').type('valid@email.com');
      cy.contains('button', 'Login').click();
      cy.contains('Please enter a valid password');
    });
  });
});


