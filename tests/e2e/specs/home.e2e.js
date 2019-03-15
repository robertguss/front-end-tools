describe('Home Page', () => {
  it('has the correct title and heading', () => {
    cy.visit('/');
    cy.title().should(
      'equal',
      'Travel Insurance Quotes - Compare & Buy Trip Insurance'
    );
    cy.contains('h1', 'Travel Insurance for Every Trip');
  });
});
