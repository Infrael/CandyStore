describe('Home Page Tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Home Page laods correctly', () => {
    cy.url().should('include', 'https://sweetshop.netlify.app');

    cy.contains("header h1", 'Welcome to the sweet shop!');
    cy.performImageChecks('.card', 'img.card-img-top');
    cy.contains("footer p", 'Sweet Shop Project 2018');
  });


  it('Home Page to Sweets', () => {
    cy.contains(".nav-link", "Sweets").click();
    cy.url().should('include', 'sweets');
  });

  it('Home Page to Sweets via Button', () => {
    cy.get('a.btn.sweets').click();
    cy.url().should('include', 'sweets');
  });

  it('Home Page to About', () => {
    cy.contains(".nav-link", "About").click();
    cy.url().should('include', 'about');
  });

  it('Home Page to Login', () => {
    cy.contains(".nav-link", "Login").click();
    cy.url().should('include', 'login');
  });

  it('Home Page to Basket', () => {
    cy.contains(".nav-link", "Basket").click();
    cy.url().should('include', 'basket');
  });

  it('Home Page to Home', () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});

describe('Sweets Page Tests', () => {
  beforeEach(() => {
    cy.visit('/sweets');
  });

  it('Sweets Page laods correctly', () => {
    cy.url().should('include', 'sweets');
    cy.contains("header h1", 'Browse sweets');
    cy.performImageChecks('.card', 'img.card-img-top');
    cy.contains("footer p", 'Sweet Shop Project 2018');
  });

  it('About opens from Sweets Page', () => {
    cy.contains(".nav-link", "About").click();
    cy.url().should('include', 'about');
  });

  it('Login opens from Sweets Page', () => {
    cy.contains(".nav-link", "Login").click();
    cy.url().should('include', 'login');
  });

  it('opens from Sweets Page', () => {
    cy.contains(".nav-link", "Basket").click();
    cy.url().should('include', 'basket');
  });

  it('Home opens from Sweets Page', () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });


});

describe('About Page Tests', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('About Page laods correctly', () => {
    cy.url().should('include', 'about');
    cy.contains("header h1", 'Sweet Shop Project');

    cy.get('p.lead').each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .invoke('trim')
        .should('not.be.empty');
    });

    cy.contains("footer p", 'Sweet Shop Project 2018');
  });

  it('Login opens from About Page', () => {
    cy.contains(".nav-link", "Login").click();
    cy.url().should('include', 'login');
  });

  it('Basket opens from About Page', () => {
    cy.contains(".nav-link", "Basket").click();
    cy.url().should('include', 'basket');
  });

  it('Sweets opens from About Page', () => {
    cy.contains(".nav-link", "Sweets").click();
    cy.url().should('include', 'sweets');
  });

  it('Home opens from About Page', () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});

describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Login Page UI Laods Correctly', () => {
    cy.url().should('include', 'login');
    cy.contains("header h1", 'Login');

    cy.get("input#exampleInputEmail").should('exist')
      .and('be.visible')
      .and('have.attr', 'placeholder', 'you@example.com');

    cy.get("input#exampleInputPassword").should('exist')
      .and('be.visible')
      .and('have.attr', 'placeholder', 'Password');

    cy.get('button').contains('Login').should('exist')
      .and('be.visible');

    cy.contains("footer p", 'Sweet Shop Project 2018');
  });

  it('Login Page to About', () => {
    cy.contains(".nav-link", "About").click();
    cy.url().should('include', 'about');
  });

  it('Login Page to Basket', () => {
    cy.contains(".nav-link", "Basket").click();
    cy.url().should('include', 'basket');
  });

  it('Login Page to Sweets', () => {
    cy.contains(".nav-link", "Sweets").click();
    cy.url().should('include', 'sweets');
  });

  it('Login Page to Home', () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
  });

  describe('Social Media Tests', () => {
    beforeEach(() => {
      cy.visit('/login');
    });

    it('Twitter is set up properly', () => {
      cy.validateSocialElement('Twitter');
    });

    it('Facebook is set up properly', () => {
      cy.validateSocialElement('Facebook');
    });

    it('LinkedIn is set up properly', () => {
      cy.validateSocialElement('LinkedIn');
    });
  });

});

describe('Basket Page Tests', () => {
  beforeEach(() => {
    cy.visit('/basket');
  });
  it('Basket Page laods correctly', () => {

    cy.visit('/basket');
    cy.url().should('include', 'basket');

    //TODO: Add checks for the basket page elements

  });

  it('Basket Page to About', () => {
    cy.contains(".nav-link", "About").click();
    cy.url().should('include', 'about');
  });

  it('Basket Page to Login', () => {
    cy.contains(".nav-link", "Login").click();
    cy.url().should('include', 'login');
  });

  it('Basket Page to Sweets', () => {
    cy.contains(".nav-link", "Sweets").click();
    cy.url().should('include', 'sweets');
  });

  it('Basket Page to Home', () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
  });
});