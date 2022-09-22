//import { beforeEach } from "mocha";
//import {Person} from "../../support/factories/person/index"
//const faker = require("faker");


describe('criar uma pessoa', function (){
    // beforeEach(()=>{
    //     cy.task('firstName').then((firstName)=>{
    //         firstName = firstName;
    //         cy.log(JSON.stringify(firstName))
    //     })
    // })

    it('criar uma pessoa', function(){
        let fakeuser;
        //cy.createPerson(Person).should((response)=>{
            cy.request({
                method: 'POST',
                url: '/person',
                body:{
                    firstName: "CRISTIANO",
                    lastName:"LOBO",
                    occupation:"QA",
                    gender:	"F",
                    dateOfBirth:"1988-08-28T00:00:00.000Z"
                }
            })
            .should((response)=> {
                expect(response.status).eq(201)
                expect(response.body.message).eq("Pessoa inserida no sistema com sucesso!")
            })

            //expect(response.status).to.eq(201)
        })
    })


