describe('buying a fruit', () => {
  it('buying', () => {
    cy.visit('localhost:3000');
    cy.get('button:contains("Comprar")').first().click();
    cy.get('#mini-cart').click();
    cy.get('button:contains("Finalizar Compra")').click();
  });
});
