describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Home Page laods correctly', () => {
    cy.contains("header h1", 'Welcome to the sweet shop!');

    cy.checkImageLoaded('.card', 'img.card-img-top');

    cy.contains("footer p", 'Sweet Shop Project 2018');
  });
});

describe('Sweets Page Tests', () => {
  beforeEach(() => {
    cy.visit('/sweets');
  });

  it('Sweets Page laods correctly', () => {
    cy.contains("header h1", 'Browse sweets');

    cy.checkImageLoaded('.card', 'img.card-img-top');

    cy.contains("footer p", 'Sweet Shop Project 2018');
  });

  it('Sweets Page to About', () => {
    cy.contains(".nav-link", "About").click();
    cy.url().should('include', 'about');
  });

  it('Sweets Page to Login', () => {
    cy.contains(".nav-link", "Login").click();
    cy.url().should('include', 'login');
  });

  it('Sweets Page to Basket', () => {
    cy.contains(".nav-link", "Basket").click();
    cy.url().should('include', 'basket');
  });

  it('Sweets Page to Home', () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
  });
});

describe('About Page Tests', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('About Page laods correctly', () => {
    cy.contains("header h1", 'Sweet Shop Project');
    cy.contains("footer p", 'Sweet Shop Project 2018');

  });

  it('About Page to Login', () => {
    cy.contains(".nav-link", "Login").click();
    cy.url().should('include', 'login');
  });

  it('About Page to Basket', () => {
    cy.contains(".nav-link", "Basket").click();
    cy.url().should('include', 'basket');
  });

  it('About Page to Sweets', () => {
    cy.contains(".nav-link", "Sweets").click();
    cy.url().should('include', 'sweets');
  });

  it('About Page to Home', () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
  });
});

describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Login Page laods correctly', () => {
    
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
});

describe('Basket Page Tests', () => {
  beforeEach(() => {
    cy.visit('/basket');
  });

  it('Basket Page laods correctly', () => {
    
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
