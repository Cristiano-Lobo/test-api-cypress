
describe('Obtendo uma única pessoa', () => {
    context('Obtendo uma única pessoa', () => {
      it('Obter uma única pessoa com sucesso', () => {
        cy.request({
          method: 'GET',
          url: '/person',
          qs:{
            _id: '63298ab7860f5775756495f7'
          }
        })
          .should((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body)
          })

        expect(true).to.eq(true)
      });
    });
  });
  