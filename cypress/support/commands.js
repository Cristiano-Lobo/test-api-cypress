const faker = require("faker")

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//let fakeUser;
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

//const { expect } = require("chai")


Cypress.Commands.add('getUsers', function () {
    cy.request({
        method: 'GET',
        url: 'usuarios'
    })
})

Cypress.Commands.add('createUser', function () {
    cy.request({
        method: 'POST',
        url: 'usuarios',
        body: {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: "true"
        }
    })

    Cypress.Commands.add('updateUser', function () {
        cy.request({
            method: 'PUT',
            url: 'usuarios/${}',
            body: {
                nome: faker.name.firstName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                administrador: "true"
            }
        })
    })
})


