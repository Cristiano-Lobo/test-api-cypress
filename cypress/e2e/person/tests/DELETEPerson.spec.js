
import * as DELETEPerson from '../requests/DELETEPerson.request'
import * as GETAllPerson from '../requests/GETAllPerson.request'
import * as POSTPerson from '../requests/POSTPerson.request'

describe('deletar uma pessoa existente', function () {
    it('deletar uma pessoa', function () {
        GETAllPerson.allPerson().then((resAllPerson) => {
            let id = resAllPerson.body[0]._id
            cy.log(id)

            DELETEPerson.deletePerson(id)
                .should((resDeletePerson) => {
                    expect(resDeletePerson.status).to.eq(200)
                })
        })
    })
})
    // it('criar e excluir uma pessoa', ()=>{
        // POSTPerson.addPerson().then((resAddPerson)=>{
        //     cy.log(resAddPerson.body._id)
        //     let id = resAddPerson.body_id
        //     cy.log('teste', id)
    //         DELETEPerson.deletePerson(resAddPerson.body._id)
    //         .should((resDeletePerson)=>{
    //             expect(resDeletePerson.status).to.eq(200)
    //         })

    //     })

    //)
        //})



