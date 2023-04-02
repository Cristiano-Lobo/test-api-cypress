/// <reference types="cypress" />

describe('Request usuários', () => {

    context('GET /usuarios', () => {
        it('should return a list with all usuários', () => {
            cy.getUsers()
                .then((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    //expect(response.body.usuarios.length).to.be.eq(2)
                    expect(response.body.usuarios[0].email).to.not.be.null
  
                    Cypress._.each(response.body.usuarios, (usuario) => {
                        expect(usuario.email).to.not.be.null
                        expect(usuario).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id')
                        })    
                })
        })
    })
})