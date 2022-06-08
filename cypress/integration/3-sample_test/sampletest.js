describe('My First Test', function(){
    // 1.Does not do much
    // Visits the kitchen sink
    // Gets, types and asserts
    it('Does not do much', function(){
        // 1.expect(true).to.equal(true)
        cy.visit('https://example.cypress.io')
        
        console.log(cy.contains('type').click())

        cy.url()
            .should('include','/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value','fake@email.com')

        cy.get('.action-focus')
            .type('123456')
            .should('have.value','123456')

        cy.get('.action-form')
            .find('[type="text"]').type("Test")

        cy.get('.action-form').submit()
            .next().should('contain','Your form has been submitted!')
        
            
    })
})