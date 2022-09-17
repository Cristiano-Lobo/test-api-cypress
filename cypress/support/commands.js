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

Cypress.Commands.add('getAllperson', function () {
    cy.request({
       method:'GET',
       url: 'http://api-person-test.herokuapp.com/person'
    }).then(function (response) {
        //cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(200)
        return response.body
    })
})

Cypress.Commands.add('createPerson', function (user) {
    cy.request({
        method: 'POST',
        url: 'http://api-person-test.herokuapp.com/person',
        body: user,
        headers:{
            'Content-Type': 'application/json'
        }
}).then(function (response) {
        expect(response.status).to.eq(201)
        return response.body
    })
})



