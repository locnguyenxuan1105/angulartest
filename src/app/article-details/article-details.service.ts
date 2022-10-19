import { Injectable } from "@angular/core";
import { Apollo } from 'apollo-angular';
import { GET_ARTICLE } from '../graphql/queries';

@Injectable({
    providedIn: 'root'
})
export class ArticleDetailService {
    constructor(private apollo: Apollo) { }

    loadItem(url: string) {
        return this.apollo.watchQuery({
            query: GET_ARTICLE,
            variables: {
                url: url
            }
        });
    }

}