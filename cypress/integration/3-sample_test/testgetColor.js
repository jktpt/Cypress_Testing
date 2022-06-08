describe('Get Color', function(){
    it('change color with cypress', function(){
        cy.visit('http://127.0.0.1:5500/success.html')
        
        cy.document().its('documentElement.style')
            .then((style) => cy.spy(style, 'setProperty').as('setColor'))

        cy.get('#test')
            .invoke('css', 'background-color','#eb34eb')
            .trigger('change')

        cy.get('#test')
            .should('have.css', 'background-color', 'rgb(235, 52, 235)')
    })
    it('change color with button',()=>{
        cy.visit('http://127.0.0.1:5500/success.html')
        cy.get('#red').click()

        cy.get('#test')
            .should('contain','Lorem')

        const redColor = cy.get('#test').invoke('attr','class').should('equal','red')
        if(redColor){
            cy.get('#blue').click()
            
        }

        const blueColor =  cy.get('#test').invoke('attr','class').should('equal','blue')
        if(blueColor){
            cy.get('#green').click()
        }

        const greenColor = cy.get('#test').invoke('attr','class').should('equal','green')
        
        if(greenColor){
            cy.get('#test').invoke('attr','class').should('equal','green')
        }
            // Check Fail test
        // cy.get('#green').click()

        // cy.get('#test')
        //     .invoke('attr','class')
        //     .should('equal','red')
    })

    it('Get word to color', ()=>{
        cy.visit('http://127.0.0.1:5500/success.html')

        cy.get('#red').click()

        const ipsumRed =  cy.get('#test').should('contain','ipsum')
        if(ipsumRed){
            cy.should('have.css','color','rgb(255, 0, 0)')
        }

        const dolorBlue = cy.get('#test').should('contain','dolor')
        if(dolorBlue){
            cy.should('have.css','color','rgb(0, 0, 255)')
        }
            
            
    })
})