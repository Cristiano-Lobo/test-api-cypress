//<reference types="cypress" /> //facilita no autocomplete

function allPerson(){
    return cy.request({
        method: 'GET',
        url:'/person',
        failOnStatusCode: false, //não falhar caso o status code seja diferente de 200
    })
}

export {allPerson}