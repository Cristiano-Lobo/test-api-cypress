/// <reference types="cypress" />
const user = require('../../../fixtures/user.json')
let fakeUser;

describe('Update User api', () => {
  beforeEach(() => {
    cy.task('freshUser').then((user) => {
      fakeUser = user;
      cy.log(JSON.stringify(fakeUser))
    });
  });
    
    context('When I update PUT /usuario', () => {
      it('Then it should update create a user', () => {
        cy.request({
          method: 'PUT',
          url: 'usuarios/0uxuPY0cbmQhpEz1',
          body: fakeUser
        })
          .then((response) => {
            expect(response.status).eq(200)
            expect(response.body.message).eq("Registro alterado com sucesso")
          });
      });
    });
  });