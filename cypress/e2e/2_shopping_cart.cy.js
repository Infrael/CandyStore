describe('Basket Page Tests', () => {

  beforeEach(() => {
    cy.visit('/basket');
  });

  it('Basket layout loads with heading', () => {
    cy.contains('h1', 'Your Basket').should('be.visible');
  });

  it('TC_1.2: Shows empty basket message when nothing is added', () => {
    cy.contains('Your basket is empty').should('be.visible');
  });

  it('TC_1.3: Total cost is £0.00 when basket is empty', () => {
    cy.contains('Total: £0.00').should('exist');
  });

  // 2. Add-to-Basket (requires navigating from /sweets)
  it('TC_2.1: Add one item and verify it appears in basket', () => {
    cy.visit('/sweets');
    cy.get('.card').first().contains('Add to Basket').click();
    cy.visit('/basket');
    cy.get('.basket-item').should('have.length', 1);
  });

  it('TC_2.2: Add multiple items and verify quantities and total', () => {
    cy.visit('/sweets');
    cy.get('.card').eq(0).contains('Add to Basket').click();
    cy.get('.card').eq(1).contains('Add to Basket').click();
    cy.visit('/basket');
    cy.get('.basket-item').should('have.length', 2);
    cy.contains('Total: £').should('exist');
  });

  // 3. Remove/Clear
  it('TC_3.1: Remove an item from the basket', () => {
    // Add item first
    cy.visit('/sweets');
    cy.get('.card').first().contains('Add to Basket').click();
    cy.visit('/basket');
    cy.contains('Remove').click();
    cy.contains('Your basket is empty').should('exist');
  });

  it('TC_3.2: Clear entire basket', () => {
    // Add two items
    cy.visit('/sweets');
    cy.get('.card').eq(0).contains('Add to Basket').click();
    cy.get('.card').eq(1).contains('Add to Basket').click();
    cy.visit('/basket');
    cy.contains('Clear Basket').click();
    cy.contains('Your basket is empty').should('exist');
  });

  // 4. Delivery Options
  it('TC_4.1: Select free delivery and verify total remains unchanged', () => {
    // Add item
    cy.visit('/sweets');
    cy.get('.card').first().contains('Add to Basket').click();
    cy.visit('/basket');
    cy.get('select').select('Collect (FREE)');
    cy.contains('£1.99').should('not.exist');
  });

  it('TC_4.2: Select Standard shipping and verify £1.99 added', () => {
    cy.get('select').select('Standard shipping (£1.99)');
    cy.contains('£1.99').should('exist');
  });

  // 5. Navigation
  it('TC_5.1: Continue shopping brings user to sweets page', () => {
    cy.contains('Continue Shopping').click();
    cy.url().should('include', '/sweets');
  });

  it('TC_5.2: Proceed to checkout navigates to checkout page', () => {
    // Add something first
    cy.visit('/sweets');
    cy.get('.card').first().contains('Add to Basket').click();
    cy.visit('/basket');
    cy.contains('Checkout').click();
    cy.url().should('include', '/checkout');
  });
});
