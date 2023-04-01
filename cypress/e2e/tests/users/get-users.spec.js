/// <reference types="cypress" />

describe('Request usuários', () => {

    context('GET /usuarios', () => {
        it('should return a list with all usuários', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/usuarios'
            })
                .then((response) => { //estudar .should
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.body.usuarios.length).to.be.eq(2)
                    expect(response.body.usuarios[0]).to.have.all.keys(
                        'nome', 'email', 'password', 'administrador', '_id')

                })
        })
    })
})