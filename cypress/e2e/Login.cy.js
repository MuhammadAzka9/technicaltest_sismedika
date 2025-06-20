import loginElement from '../support/loginElement';
const dataLogin = require('../fixtures/dataLogin.json');

describe('Login', () => {
  it('Login dengan akun valid', () => {
    cy.visit('/');
    cy.get(loginElement.Username).type(dataLogin.inputStandarUser)
    cy.get(loginElement.Password).type(dataLogin.inputPassword)
    cy.get(loginElement.LoginButton).click();
    cy.contains('Products').should('exist').and('be.visible')
  });

  it('Login dengan akun yang tidak registrasi', () => {
    cy.visit('/');
    cy.get(loginElement.Username).type(dataLogin.inputInvalidUser)
    cy.get(loginElement.Password).type(dataLogin.inputInvalidPassword)
    cy.get(loginElement.LoginButton).click();
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('exist').and('be.visible')
  });

  it('Login tanpa input username', () => {
    cy.visit('/');
    cy.get(loginElement.Password).type(dataLogin.inputPassword)
    cy.get(loginElement.LoginButton).click();
    cy.contains('Epic sadface: Username is required').should('exist').and('be.visible')
  });

  it('Login tanpa input password', () => {
    cy.visit('/');
    cy.get(loginElement.Username).type(dataLogin.inputStandarUser)
    cy.get(loginElement.LoginButton).click();
    cy.contains('Epic sadface: Password is required').should('exist').and('be.visible')
  });

  it('Login dengan akun yang locked out', () => {
      cy.visit('/');
    cy.get(loginElement.Username).type(dataLogin.inputLockedOutUser)
    cy.get(loginElement.Password).type(dataLogin.inputPassword)
    cy.get(loginElement.LoginButton).click();
    cy.contains('Epic sadface: Sorry, this user has been locked out.').should('exist').and('be.visible')
  });
});
