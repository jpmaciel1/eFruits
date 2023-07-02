describe('buying a fruit', () => {
  it('buying', () => {
    cy.visit('localhost:3000');
    cy.get('button:contains("Comprar")').first().click();
    cy.get('.Toastify__close-button').click();
    cy.get('#mini-cart').click();
    cy.get('#remove-minicart').click();
  });
});
