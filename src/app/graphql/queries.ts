import { gql } from 'apollo-angular'

const GET_LIST_ARTICLE = gql`
    query GetArticles($pageNumber: Int!) {
        articles (pageNumber : $pageNumber){
            title,
            subtitle,
            content,
            description,
            coverImageUrl,
            url,
        }
    }
`

const GET_ARTICLE = gql`
  query GetArticle($url: String!){
        article(url: $url) {
            title,
            subtitle,
            content,
            description,
            coverImageUrl,
            url,
        }
  }
`

export { GET_LIST_ARTICLE, GET_ARTICLE }