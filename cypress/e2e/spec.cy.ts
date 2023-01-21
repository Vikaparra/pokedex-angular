describe('base test', () => {
  it('should visit the initial project page', () => {
    cy.visit('/');
    cy.contains('app is running!');
  });
});
