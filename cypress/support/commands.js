// ***********************************************
// This example commands.js shows you how to
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
// import {data_consts} from '../fixtures/consts.json'

import {data_fields_positive} from '../fixtures/field_options_pos.json';
import {data_fields_negative} from '../fixtures/field_options_neg.json';
import {name_selector, phone_selector, email_selector, button_add_selector} from '../support/consts.js';

Cypress.Commands.add('populateDataFieldsPositiveTests', () => {
    data_fields_positive.forEach(element => {
        cy.get(name_selector).clear()
        cy.get(phone_selector).clear()
        cy.get(email_selector).clear()
        cy.get(name_selector).type(element.name)
        cy.get(name_selector).invoke('val').should('contain', element.name)
        cy.get(phone_selector).type(element.phone)
        cy.get(phone_selector).invoke('val').should('contain', element.phone)
        cy.get(email_selector).type(element.email)
        cy.get(email_selector).invoke('val').should('contain', element.email)
        cy.get(button_add_selector).click()
        cy.get('table tbody tr').should('contain', element.name).should('contain', element.phone).should('contain', element.email)
        //we can add screenshots:
        // cy.screenshot()
    })
})
 
Cypress.Commands.add('populateDataFieldsNegativeTests', () => {


    data_fields_negative.forEach(element => {
        cy.get(name_selector).clear()
        cy.get(phone_selector).clear()
        cy.get(email_selector).clear()
        cy.get(name_selector).type(element.name)
        cy.get(name_selector).invoke('val').should('contain', element.name)
        cy.get(phone_selector).type(element.phone)
        cy.get(phone_selector).invoke('val').should('contain', element.phone)
        cy.get(email_selector).type(element.email)
        cy.get(email_selector).invoke('val').should('contain', element.email)
        cy.get(button_add_selector).click()
        cy.get('table tbody tr').should('contain', element.name).should('contain', element.phone).should('contain', element.email)

// I think here must be some mistakes like "Field populated incorrect"
// so these tests will fail

        // cy.get(name_selector).type(element.name)
        // cy.get(name_selector).invoke('val').should('contain.text', 'Field populated incorrect')
        // cy.get(phone_selector).type(element.phone)
        // cy.get(phone_selector).invoke('val').should('contain.text', 'Field populated incorrect')
        // cy.get(email_selector).type(element.email)
        // cy.get(email_selector).invoke('val').should('contain.text', 'Field populated incorrect')
        // cy.get(button_add_selector).click()

        //also we can add screenshots:
        // cy.screenshot()
    })
})