describe('making a login', () => {
  it('login', () => {
    cy.visit('localhost:3000');
    cy.get('#user-button').click();
    cy.get('#email-field').type('teste@teste.com');
    cy.get('#password-field').type('13579abc');
  });
});
