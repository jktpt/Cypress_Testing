describe('LIOnsite',function(){
    it('Tag LI',function(){
        cy.visitWithLink({links:'http://127.0.0.1:5500/index.html'})
        cy.get('#toggle').click()

        cy.get("body").then($body=>{
            console.log($body.find('[type="Connect"]').length>0);
            if($body.find('[type="Connect"]').length>0){
                console.log($body)
                cy.get('[type="Connect"]').click()
                // cy.get('#toggle').then($header=>{
                //    $header.click()
                  
                //    console.log($header.click().find('[type="Connect"]').length);
                //    if($header.find('[type="Connect"]').length>0){
                //     console.log("Ok");
                // }
                // });
            }else{
                assert.isOk('everything','everything is ok')
                cy.get('#toggle').click()
                cy.get('.create-account').click()
            }
        })

       

        // cy.get('#toggle').then($btn=>{
        //     if($btn.is(':visible')){
        //         $btn.click()
        //         cy.get('[type="Connects"]')
        //     }
        // })
        // console.log(cy.getElement({attribute:'[type="Connect"]'}))
        
        // const asCheck = assert.isNotOk(cy.getElement({attribute:'[type="Connect"]'}).firstCall,'Ok false')

        // if(!asCheck){
        //     cy.getElement({attribute:'#toggle'}).click()
        //     console.log(cy.getElement({attribute:'[type="Connect"]'}).should('be.visible'))
        // }
        
      
         
})
})