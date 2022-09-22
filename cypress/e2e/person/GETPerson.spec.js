
describe('Obter um único usuário', () => {
    context('it provides a way to keep tests easier to read and organized.', () => {
      it('This is your test case', () => {
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
  