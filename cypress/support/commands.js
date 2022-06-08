// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('visits',()=>{
    cy.visit('http://127.0.0.1:5500/success.html')
})



Cypress.Commands.add('typeLogin', (user) => {
    cy.get('input[name=email]')
      .type(user.email)
  
    cy.get('input[name=password]')
      .type(user.password)
  })

Cypress.Commands.add('changeBackground',()=>{
    cy.document().its('documentElement.style')
        .then((style) => cy.spy(style, 'setProperty').as('setColor'))

    cy.get('#test')
        .invoke('css', 'background-color','#eb34eb')
        .trigger('change')

    cy.get('#test')
        .should('have.css', 'background-color', 'rgb(235, 52, 235)')
})

Cypress.Commands.add('rgbClick',()=>{
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
})

Cypress.Commands.add('apiTest',()=>{
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=3266dfd13614d8ff225dc8f844b4895b&language=en-US&sort_by=popularity.desc&page=1&year=2022"
    const checkStatus = cy.request(url).wait(1000).its('status').should('eq',200)
        
    if(checkStatus){
        cy.request(url)
        .wait(1000)
        .its('body.results')
        .should('be.an','Array')
        .and('have.length.gt',15)
    }

})

Cypress.Commands.add('apiTestID',(id)=>{
      const attrList = [];
      const url = "https://api.themoviedb.org/3/discover/movie?api_key=3266dfd13614d8ff225dc8f844b4895b&language=en-US&sort_by=popularity.desc&page=1&year=2022"

      cy.request(url).wait(1000).its(`body.results.${id.id}`)
    })

// Easy to use

Cypress.Commands.add('visitWithLink',(data)=>{
    cy.visit(data.links)
})


Cypress.Commands.add('getElement',(data)=>{
    cy.get(data.attribute)

})