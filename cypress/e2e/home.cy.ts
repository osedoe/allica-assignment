describe('Home', () => {
  it('should load and retrieve the Star Wars characters', () => {
    cy.loadCharacters();

    cy.wait('@characters').its('response.statusCode').should('eq', 200);

    cy.contains('Luke Skywalker');
    cy.contains('C-3PO');
    cy.contains('R2-D2');
    cy.contains('Darth Vader');
    cy.contains('Leia Organa');
    cy.contains('Owen Lars');
    cy.contains('Beru Whitesun lars');
    cy.contains('R5-D4');
    cy.contains('Biggs Darklighter');
    cy.contains('Obi-Wan Kenobi');
  });

  it('should allow the user to select a character', () => {
    cy.loadCharacters();
    
    cy.wait('@characters').its('response.statusCode').should('eq', 200);
    
    cy.contains('Luke Skywalker').click();

    cy.url().should('include', '/character-details/1');
  });
})
