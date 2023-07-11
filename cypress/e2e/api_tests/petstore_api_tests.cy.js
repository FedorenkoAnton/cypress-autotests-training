Cypress.config('baseUrl', 'https://petstore.swagger.io/v2')

context('POST /pet', ()=> {
    it('add pet to the store', ()=> {
        cy.fixture('store_pet_req_body.json').then((storePetReqBody)=> {
            const PET_NAME = 'Belyashik'
            const PET_ID = 777

            cy.request({
                method: 'POST',
                url: '/pet',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: storePetReqBody
            }).then((response)=> {
                expect(response.body.id, 'equals to').to.equal(PET_ID)
                expect(response.body.name, 'equals to').to.equal(PET_NAME)
            })
        })
    })
}) 