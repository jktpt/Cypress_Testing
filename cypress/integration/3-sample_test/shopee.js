describe('Shopee Test', function(){


    it('Does not do much',function(){
        cy.visit('https://shopee.co.th/buyer/login?gclid=Cj0KCQjwnNyUBhCZARIsAI9AYlFGG4rSIde-Xjo8-ZXfTl2GooFI4MJkelZO6DCLvBoqB26B946Xef4aAoHWEALw_wcB&next=https%3A%2F%2Fshopee.co.th%2F%3Fgclid%3DCj0KCQjwnNyUBhCZARIsAI9AYlFGG4rSIde-Xjo8-ZXfTl2GooFI4MJkelZO6DCLvBoqB26B946Xef4aAoHWEALw_wcB')

        cy.contains('ไทย').click()

        cy.get('[name$="loginKey"]')
            .type('0877971077')
            .should('have.value','0877971077')

        cy.get('[name$="password"]')
            .type('Krittapak1')
            .should('have.value','Krittapak1')

        cy.get('.wyhvVD').click()

        cy.get('.UbNlH7').click()

        cy.wait(5000)
      
// Shopee SVG 
    
        // if(cy.get('svg').should('exist')){
        //     cy.get('svg').click()
        // }
  
        // cy.get('.shopee-popup__close-btn')
            // .click()
        
            cy.get('svg')
                .should('have.attr','width','16')
                .and('have.attr','height','16')
                .find('path')
                .first()
                .invoke('attr','fill','red')

        cy.url()
            .should('include','https://shopee.co.th/')

        cy.get('.shopee-searchbar-input__input')
            .type('รองเท้าผ้าใบ')
            .should('have.value','รองเท้าผ้าใบ')

        cy.wait(3000)

        cy.contains('รองเท้าผ้าใบสีขาว').click()

        cy.get('.shopee-search-result-header__text-highlight')
            .should('contain','รองเท้าผ้าใบผู้หญิง')

    })
})