describe('Menu Slider',function(){
    it('menu',function(){
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.get('[aria-describedby="open-toggle"]')
            .click()
            
        cy.wait(300)

        cy.get('ul>li:nth-child(2)>a')
            .should('contain','เกี่ยวกับ')
            .click()
    })

    it('task2',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#hide-textbox')
            .click()
        

        cy.get('#displayed-text')
            .should('not.be.visible')

            // Test Display Not visible
        // cy.get('#displayed-text')
            // .type('Job')

        cy.get('#show-textbox')
            .click()
            .then(($input)=>{
                cy.get('#displayed-text')
                    .type('job')
                    .should('')
            })
    })
})