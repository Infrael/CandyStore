describe('Home Page Tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('TC_1.1.1: Home Page laods correctly', () => {
    cy.url().should('include', 'https://sweetshop.netlify.app');

    cy.contains("header h1", 'Welcome to the sweet shop!');
    cy.performImageChecks('.card', 'img.card-img-top');
    cy.contains("footer p", 'Sweet Shop Project 2018');
  });

  it('TC_1.1.2: Home Page to Sweets', () => {
    cy.contains(".nav-link", "Sweets").click();
    cy.url().should('include', 'sweets');
  });

  it('TC_1.1.2: Home Page to Sweets via Browse Sweets Button', () => {
    cy.get('a.btn.sweets').click();
    cy.url().should('include', 'sweets');
  });

  it('TC_1.1.2: Home Page to About', () => {
    cy.contains(".nav-link", "About").click();
    cy.url().should('include', 'about');
  });

  it('TC_1.1.2: Home Page to Login', () => {
    cy.contains(".nav-link", "Login").click();
    cy.url().should('include', 'login');
  });

  it('TC_1.1.2: Home Page to Basket', () => {
    cy.contains(".nav-link", "Basket").click();
    cy.url().should('include', 'basket');
  });

  it('TC_1.1.2: Home Page to Home', () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

});

describe('Sweets Page Tests', () => {
  beforeEach(() => {
    cy.visit('/sweets');
  });

  it('TC_1.2.1: Sweets Page laods correctly', () => {
    cy.url().should('include', 'sweets');
    cy.contains("header h1", 'Browse sweets');
    cy.performImageChecks('.card', 'img.card-img-top');
    cy.contains("footer p", 'Sweet Shop Project 2018');
  });

  it('TC_1.2.2: Sweets Page to About', () => {
    cy.contains(".nav-link", "About").click();
    cy.url().should('include', 'about');
  });

  it('TC_1.2.2: Sweets Page to Login', () => {
    cy.contains(".nav-link", "Login").click();
    cy.url().should('include', 'login');
  });

  it('TC_1.2.2: Sweets Page to Basket', () => {
    cy.contains(".nav-link", "Basket").click();
    cy.url().should('include', 'basket');
  });

  it('TC_1.2.2: Sweets Page to Home', () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

});

describe('About Page Tests', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('TC_1.3.1: About Page laods correctly', () => {
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

  it('TC_1.3.2: About Page to Login ', () => {
    cy.contains(".nav-link", "Login").click();
    cy.url().should('include', 'login');
  });

  it('TC_1.3.2: About Page to Basket', () => {
    cy.contains(".nav-link", "Basket").click();
    cy.url().should('include', 'basket');
  });

  it('TC_1.3.2: About Page to Sweets', () => {
    cy.contains(".nav-link", "Sweets").click();
    cy.url().should('include', 'sweets');
  });

  it('TC_1.3.2: About Page to Home', () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});

describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('TC_1.4.1: Login Page UI Laods Correctly', () => {
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

  it('TC_1.4.2: Login Page to About', () => {
    cy.contains(".nav-link", "About").click();
    cy.url().should('include', 'about');
  });

  it('TC_1.4.2: Login Page to Basket', () => {
    cy.contains(".nav-link", "Basket").click();
    cy.url().should('include', 'basket');
  });

  it('TC_1.4.2: Login Page to Sweets', () => {
    cy.contains(".nav-link", "Sweets").click();
    cy.url().should('include', 'sweets');
  });

  it('TC_1.4.2: Login Page to Home', () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
  });

  describe('TC_1.4.3: Social Media Tests', () => {
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

  it('TC_1.5.1: Basket Page laods correctly', () => {

    cy.visit('/basket');
    cy.url().should('include', 'basket');

    cy.contains('h1', 'Your Basket').should('be.visible');

    cy.get('form.needs-validation').should('exist')
      .and('be.visible');

    cy.get('#basketCount').should('contain', '0');
    
    cy.contains("footer p", 'Sweet Shop Project 2018');
  });

  it('TC_1.5.2: Basket Page to About', () => {
    cy.contains(".nav-link", "About").click();
    cy.url().should('include', 'about');
  });

  it('TC_1.5.2: Basket Page to Login', () => {
    cy.contains(".nav-link", "Login").click();
    cy.url().should('include', 'login');
  });

  it('TC_1.5.2: Basket Page to Sweets', () => {
    cy.contains(".nav-link", "Sweets").click();
    cy.url().should('include', 'sweets');
  });

  it('TC_1.5.2: Basket Page to Home', () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
  });
});