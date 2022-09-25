
import * as DELETEPerson from '../requests/DELETEPerson.request'
import * as GETAllPerson from '../requests/GETAllPerson.request'
import * as POSTPerson from '../requests/POSTPerson.request'

describe('deletar uma pessoa', function (){
    it('deletar uma pessoa', function(){
        GETAllPerson.allPerson().then((resAllPerson)=>{
            let _id = resAllPerson.body[0]._id
            DELETEPerson.deletePerson(_id)
                .should((resDeletePerson)=>{
                    expect(resDeletePerson.status).to.eq(200)
                })

        })

            })
    it('criar e excluir uma pessoa', ()=>{
        POSTPerson.addPerson().then((resAddPerson)=>{
            cy.log(resAddPerson)
            DELETEPerson.deletePerson(resAddPerson.body._id)
            cy.log(resAddPerson.body._id)
            .should((resDeletePerson)=>{
                expect(resDeletePerson.status).to.eq(200)
            })

        })

    })    
        })
    


