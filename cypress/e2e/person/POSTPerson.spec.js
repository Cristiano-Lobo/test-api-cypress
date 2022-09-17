import {Person} from "../../support/factories/person/index"


describe('criar uma pessoa', function (){

    it('criar uma pessoa', function(){
        cy.createPerson(Person).should((response)=>{
            //expect(response.status).to.eq(201)
        })
    })
})
