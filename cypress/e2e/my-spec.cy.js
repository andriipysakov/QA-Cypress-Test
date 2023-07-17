/// <reference types = "Cypress" />

import {name_selector, phone_selector, email_selector, column_names_selector, button_edit, button_update, button_delete, name_selector_edit, name_selector_edited} from '../support/consts.js';

describe('Test Contact App', () => {

  beforeEach(() => {
    cy.visit('./contact_app.html')
    cy.viewport(1400, 947)
  })

  it('Test if the application loads correctly', () => {
    cy.get('h1.text-center').should('have.text', 'Contact List App');
    cy.get('table tbody tr').should('have.length', 1)
  })

  // Add tests here

  it('Test column names on the contact app page', () => {
      cy.get(column_names_selector).should('be.visible')
      cy.get(column_names_selector).should('not.eq', null)
      cy.get(column_names_selector).should('contain.text', 'Name')
      cy.get(column_names_selector).should('contain.text', 'Phone')
      cy.get(column_names_selector).should('contain.text', 'Email')
      cy.get(column_names_selector).should('contain.text', 'Actions')
    })
 

  it('Test fields on the contact app page', () => {
    cy.get(name_selector).should('be.visible')
    cy.get(name_selector).should('not.be.null')
    cy.get(phone_selector).should('be.visible')
    cy.get(phone_selector).should('not.be.null')
    cy.get(email_selector).should('be.visible')
    cy.get(email_selector).should('not.be.null')

    cy.populateDataFieldsPositiveTests()
    cy.populateDataFieldsNegativeTests()
  })

  it('Test buttons edit, delete, update on the contact app page', () => {
    cy.populateDataFieldsPositiveTests()
    cy.get(button_edit).should('be.not.null')
    cy.get(button_edit).should('be.visible')
    cy.get(button_delete).should('be.not.null')
    cy.get(button_delete).should('be.visible')
    cy.get(button_edit).first().click()
    cy.get(button_update).should('be.visible')
    cy.get(button_update).should('be.not.null')
    cy.get(button_delete).first().click()
    cy.get(button_delete).last().click()
    cy.get(button_delete).should('not.exist')
    cy.get(name_selector_edit).clear().type('HelloWorld')
    cy.get(name_selector_edit).invoke('val').should('eq','HelloWorld')
    cy.get(button_update).click()
    cy.get(name_selector_edited).should('contain.text','HelloWorld')
    cy.get(button_edit).should('be.not.null')
    cy.get(button_edit).should('be.visible')
    cy.get(button_delete).should('be.not.null')
    cy.get(button_delete).should('be.visible')

  })
});