export interface Article {
    content: String
    coverImageUrl: String
    description: String
    subtitle: String
    title: String
    url: String
}

export interface AppState {
    isLoading: Boolean;
}

export interface ArticleListState {
    isLoading: Boolean;
    hasMore: Boolean;
}