


import * as POSTPerson from '../requests/POSTPerson.request'

describe('criar uma pessoa', function (){
    it('criar uma pessoa', function(){
        POSTPerson.addPerson()
            .should((response)=> {
                expect(response.status).eq(201)
                //expect(response.body[0].firstName).to.eq("Samanta")
                expect(response.body.message).eq("Pessoa inserida no sistema com sucesso!")
            })
        })
    })


