const apiKey = "c06fdbc7c13d70e4b34854083d81ea63";
let city = "Tokyo";
const url = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=c06fdbc7c13d70e4b34854083d81ea63"

describe('Weather Test',()=>{
    it('WeatherAPI',function(){
        cy.visit('http://127.0.0.1:5500/index.html')
    
        cy.get('#search')
            .type('Bangkok')
            .should('have.value','Bangkok')
        
        cy.url().should('contain', '/index.html')

        cy.get('[type="submit"]').click()
        
        const valueOfCity = cy.get('#city')
        valueOfCity.should('contain','Bangkok')

        cy.get('#search')
            .clear()

        cy.get('#search')
            .type('India')
            .should('have.value','India')
            
        cy.get('[type="submit"]').click()
        
        cy.wait(1000)

        cy.get('#city').should('contain','Tokyo')
    })
})