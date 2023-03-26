describe('Character Details', () => {
  it('should load and retrieve the Star Wars character details', () => {
    cy.loadCharacterDetails();
    cy.wait('@characterDetails').its('response.statusCode').should('eq', 200);


    cy.contains('Luke Skywalker');
  
    cy.contains('div', 'Hair colour').next('input').should('have.value', 'blond');
    cy.contains('div', 'Eye colour').next('input').should('have.value', 'blue');
    cy.contains('div', 'Homeworld').next('input').should('have.value', 'Tatooine');
    cy.contains('div', 'Gender').next('input').should('have.value', 'male');
    cy.contains('div', 'Height').next('input').should('have.value', '172');
    
    cy.contains(/a new hope/i);
    cy.contains(/the empire strikes back/i);
    cy.contains(/return of the jedi/i);
    cy.contains(/revenge of the sith/i);
  });

  it('should load the character details page, and navigate to the homepage when we click on the logo', () => {
    cy.loadCharacterDetails();
    cy.wait('@characterDetails').its('response.statusCode').should('eq', 200);

    cy.contains(/star wars characters/i).click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should load the home page, navigate to a character and modify its gender and height', () => {
    cy.loadCharacters();
    cy.wait('@characters').its('response.statusCode').should('eq', 200);
    
    cy.contains('Luke Skywalker').click();
    cy.wait(4000);
    
    cy.url().should('include', '/character-details/1');

    cy.contains('div', 'Gender').parent().find('button').click();
    cy.contains('div', 'Gender').parent().find('input').click().clear().type('female', { force: true }).should('have.value', 'female');
    cy.contains('div', 'Gender').parent().find('button').click();
    cy.contains('div', 'Gender').next('input').should('have.value', 'female');

    cy.contains('div', 'Height').parent().find('button').click();
    cy.contains('div', 'Height').parent().find('input').click().clear().type('175', { force: true }).should('have.value', '175');
    cy.contains('div', 'Height').parent().find('button').click();
    cy.contains('div', 'Height').next('input').should('have.value', '175');
  });
});