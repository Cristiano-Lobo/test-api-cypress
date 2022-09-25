
function deletePerson(_id){
    return cy.request({
        method: 'DELETE',
        url: `person/${_id}`,
        failOnStatusCode: false
    })
}

export {deletePerson}