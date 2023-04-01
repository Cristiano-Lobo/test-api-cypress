/// <reference types="cypress" />
//CÓDIGO EM REFATORAÇÃO

let fakeUser;

describe('Delete user api', () => {

    context('When I delete DEL /usuario', () => {
      it('Then it should delete a user', () => {
        cy.request({
          method: 'DELETE',
          url: 'usuarios',
          body: fakeUser
        })
          .should((response) => {
            expect(response.status).eq(201)
            expect(response.body.message).eq("Registro excluído com sucesso")
          });
      });
    });
  });