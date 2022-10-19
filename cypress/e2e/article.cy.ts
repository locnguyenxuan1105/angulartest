import { aliasQuery } from '../utils/graphql-test-utils'

context('Test Product Page', () => {
  it('should verify article page', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://iwa-test.herokuapp.com/graphql', (req) => {
        aliasQuery(req, 'GetArticles')
      });
      cy.intercept('POST', 'https://iwa-test.herokuapp.com/graphql', (req) => {
        aliasQuery(req, 'GetArticle')
      });
    })


    cy.visit('http://localhost:4200/');

    cy.wait('@gqlGetArticlesQuery')
      .its('response.body.data.articles')

    cy.get('.article-grid-item').first().get('.article-grid__title').first().get('a').first().click();

    cy.wait('@gqlGetArticleQuery')
      .its('response.body.data.article')

    cy.get('.article-detail-wrapper').its('length').should('be.eq', 1);
  })
})