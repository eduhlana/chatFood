context('Actions', () => {
 
    beforeEach(() => {
      cy.visit('www.themoviedb.org')
    })
    it('Clicks on the seconds most popular TV Show', () => {
       
        cy.contains('Movies').click();
        cy.contains('Popular').click();
        cy.get('div#page_1 div.card.style_1').eq(1).click();
        cy.get('.overview > p').should('be.visible');
        cy.scrollTo('center');
        cy.get('.top_billed').should('be.visible');
        cy.contains('Overview').click();
        cy.contains('Alternative Titles').click();
        cy.get('tbody > tr > :nth-child(1)').should('be.visible');
      })

      it('Clicks on the seconds most popular TV Show', () => {
        cy.contains('Movies').click();
        cy.contains('Top Rated').click();
        cy.get(':nth-child(1) > .filter > .k-widget > .k-dropdown-wrap > .k-input');
        cy.get('.k-item').contains('Release Date Ascending').click({force:true});
        cy.get(':nth-child(2) > .name').click();
        cy.get('#with_genres').contains('Documentary').click();
        cy.scrollTo('5000');
        cy.get(':nth-child(1) > .apply > p.load_more > .no_click').click();
        cy.get('div#page_1 div.card.style_1').eq(0).click();
        cy.get('#videos span').click();
        cy.get('#media_scroller').children().should('have.class', 'h_scroller content scroller');
        cy.get('div.h_scroller.content.scroller').children().should('have.length', cy.get('#videos span').invoke('text'));
      
      })
    

});