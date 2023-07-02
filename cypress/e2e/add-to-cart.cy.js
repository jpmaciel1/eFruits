describe('buying a fruit', () => {
  it('buying', () => {
    cy.visit('localhost:3000');
    cy.get('#user-button').click();
    cy.get('#email-field').type('teste@teste.com');
    cy.get('#password-field').type('13579abc');
    cy.get('button:contains("Login")').click();
    cy.get('.MuiBackdrop-invisible').click();
    cy.get('button:contains("Comprar")').first().click();
    cy.get('#mini-cart').click();
    cy.get('button:contains("Finalizar Compra")').click();
  });
});
