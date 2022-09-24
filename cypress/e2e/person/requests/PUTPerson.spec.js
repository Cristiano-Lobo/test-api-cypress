
describe('atualizar uma pessoa', function (){
    it('atualizar uma pessoa com sucesso', function(){
            cy.request({
                method: 'PUT',
                url: '/person/63298ab7860f5775756495f7',
                body:{
                    firstName: "CRISTIANO ATUALIZADO",
                    lastName:"LOBO",
                    occupation:"QA",
                    gender:	"F",
                    dateOfBirth:"1988-08-28T00:00:00.000Z"
                },
            })
            .should((response)=> {
                expect(response.status).eq(201)
                expect(response.body.message).eq("Pessoa inserida no sistema com sucesso!")
            })
        })
    })
