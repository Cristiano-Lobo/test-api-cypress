//const cypress = require("cypress")

describe('get all person api', function (){

    it('Obtendo todas as pessoas', function(){
        //cy.getAllperson()
        //cy.log(response.body )
        cy.request({
            method:'GET',
            url: 'http://api-person-test.herokuapp.com/person'
         }).then(function (response) {
             //cy.log(JSON.stringify(response.body))
             //expect(response.body.quantidade).to.eq(2)
             //expect(response.body.produtos.length).to.be.eq(2);
             // expect(response.body.produtos[0]).to.have.all.keys(
             //     'nome', 'preco', 'descricao', 'quantidade', '_id'
             //   )
             //expect(response.body[10].firstName).to.not.be.null
            Cypress._.each(response.body, (name)=> {
                 expect(response.body.name).to.not.be.null
              }) 
            //cy.log(JSON.stringify(response.body))
             expect(response.body[0]).to.have.all.keys('_id','firstName',
             'lastName', 'occupation', 'gender',
              'dateOfBirth','__v' )
             
             expect(response.status).to.eq(200)
             return response.body
         })
     })
    })
