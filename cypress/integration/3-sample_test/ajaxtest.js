const apiKey="3266dfd13614d8ff225dc8f844b4895b";
const years = 2022;
const photoPage = displayMovies();
const urls=`
https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&year=${years}`;
async function displayMovies(urls){
   try{
        const response = await fetch(urls);
        const movies= await response.json();
        let photo;
        movies.results.forEach(data=>{
           photo = `${data.poster_path}`
        });
        return photo
   }catch(err){
       console.log(err);
   }
}

console.log(photoPage)

const url = "https://api.themoviedb.org/3/discover/movie?api_key=3266dfd13614d8ff225dc8f844b4895b&language=en-US&sort_by=popularity.desc&page=1&year=2022"

describe('Shopee Test', function(){
    it('Load ajax',function(){
        // cy.intercept('/index.html').as('index')
        const checkStatus = cy.request(url).wait(1000).its('status').should('eq',200)
        
        if(checkStatus){
            cy.request(url)
            .wait(1000)
            .its('body.results')
            .should('be.an','Array')
            .and('have.length.gt',15)
        }
        
        // cy.visit(`https://image.tmdb.org/t/p/w500/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg`)
        // cy.wait('@index')
    })


    // Another test
    it('Test Another Ajax',function(){
       cy.intercept({
           method: 'GET',
           url: 'https://api.themoviedb.org/3/discover/movie?api_key=3266dfd13614d8ff225dc8f844b4895b&language=en-US&sort_by=popularity.desc&page=1&year=2022'
       }).as('getMovie')

       cy.intercept('/req-headers', (req) => {
        req.headers['x-custom-headers'] = 'added by cy.intercept'
      }).as('headers')
     
    })
})
