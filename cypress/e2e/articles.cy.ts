import { aliasQuery } from '../utils/graphql-test-utils'

context('Test Articles Page', () => {
    beforeEach(() => {
        cy.intercept('POST', 'https://iwa-test.herokuapp.com/graphql', (req) => {
            aliasQuery(req, 'GetArticles')
        });
    })

    it('should verify article', () => {
        cy.visit('http://localhost:4200/');

        cy.wait('@gqlGetArticlesQuery')
            .its('response.body.data.articles');

        cy.get('.article-grid-item').its('length').should('be.gte', 1).and('be.lte', 30);

        cy.contains('button', 'Load More').should('exist');

        cy.contains('button', 'Load More').click();

        cy.wait('@gqlGetArticlesQuery');
        
        cy.get('.article-grid-item').its('length').should('be.gt', 30).and('be.lte', 60);
    })
})
