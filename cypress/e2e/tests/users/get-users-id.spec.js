/// <reference types="cypress" />

describe('Request usuários', () => {

    context('GET /usuarios', () => {
        it('should return a list with all usuários', () => {
            cy.request({
                method: 'GET',
                url: 'usuarios',
                qs: {
                    _id: '0uxuPY0cbmQhpEz1'
                  }
            })
                .then((response) => { //estudar .should
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.body.usuarios[0].email).to.not.be.null
                    expect(response.body.usuarios[0]).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id')
                })
        })
    })
})