import * as GETAllPerson from '../requests/GETAllPerson.request'

describe('get all person api', function (){

    it('Obtendo todas as pessoas', function(){
        GETAllPerson.allPerson()
        .should((response) =>{
            //expect(response.body[10].firstName).to.not.be.null
            // Cypress._.each(response.body, (name)=> {
            //      expect(response.body.name).to.not.be.null
            //   }) 
             expect(response.body.firstName).to.not.be.null 
             expect(response.body[0]).to.have.all.keys('_id','firstName',
             'lastName', 'occupation', 'gender',
              'dateOfBirth','__v' )
             expect(response.status).to.eq(200)
             //expect(response.body[0].firstName).to.eq("Samanta")
             //cy.log(JSON.stringify(response.body))
            //expect(response.body.quantidade).to.eq(2)
             //expect(response.body.produtos.length).to.be.eq(2);
             return response.body
            })
         })
     })

