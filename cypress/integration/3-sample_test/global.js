describe('Global test',function(){
    it('global',function(){
        cy.visits()
        cy.typeLogin({ email: 'testEmail@gmail.com', password: '1234' })
        cy.changeBackground()
    })

    // it('changeVisit',function(){
    //     cy.visits()
    //     cy.rgbClick()
    // })

    it('AJAX Test',function(){
        cy.apiTest()
    })
    
    // it('Link argument',function(){
    //     cy.visitWithLink({links:'https://google.co.th'})
    // })

    it('Ajax id Test',function(){
        cy.apiTestID({id:1})
    })

    
})