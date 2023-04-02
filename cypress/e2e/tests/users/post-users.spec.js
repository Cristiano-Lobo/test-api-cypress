/// <reference types="cypress" />

describe('Create Users api', () => {

    context('When I send POST /usuarios', () => {
      it('Then it should create a new user', () => {
        cy.createUser()
          .should((response) => {
            expect(response.status).eq(201)
            expect(response.body.message).eq("Cadastro realizado com sucesso")
          });
      });
    });
  });