/// <reference types="cypress"/> //facilita no autocomplete
const payloadAddPerson = require('../payloads/add-person.json')

function addPerson(){
    return cy.request({
        method: 'POST',
        url:'/person',
        failOnStatusCode: false, //não falhar caso o status code seja diferente de 200
        body:payloadAddPerson
    })
}

export {addPerson}