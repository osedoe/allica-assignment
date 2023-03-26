/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

Cypress.Commands.add('loadCharacters', ({ withMock = false } = {}) => {
  if (withMock) {
    cy.intercept('GET', 'https://swapi.dev/api/people/', {
      fixture: 'characters.json',
    }).as('characters');
  } else {
    cy.intercept('GET', 'https://swapi.dev/api/people/').as('characters');
  }

  cy.visit('http://localhost:3000');
});

Cypress.Commands.add('loadCharacterDetails', ({ withMock = false } = {}) => {
  if (withMock) {
    cy.intercept('GET', 'https://swapi.dev/api/people/*', {
      fixture: 'character-details.json',
    }).as('characterDetails');
  } else {
    cy.intercept('GET', 'https://swapi.dev/api/people/*').as('characterDetails');
  }

  cy.visit('http://localhost:3000/character-details/1');
});