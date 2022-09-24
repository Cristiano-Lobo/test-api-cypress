
describe('criar uma pessoa', function (){
    it('criar uma pessoa', function(){
            cy.request({
                method: 'POST',
                url: '/person',
                body:{
                    firstName: "CRISTIANO",
                    lastName:"LOBO",
                    occupation:"QA",
                    gender:	"F",
                    dateOfBirth:"1988-08-28T00:00:00.000Z"
                }
            })
            .should((response)=> {
                expect(response.status).eq(201)
                expect(response.body.message).eq("Pessoa inserida no sistema com sucesso!")
            })
        })
    })


