import { Injectable } from "@angular/core";
import { Article } from "../interface/interface";
import { Apollo } from 'apollo-angular';
import { GET_LIST_ARTICLE } from '../graphql/queries';

@Injectable({
    providedIn: 'root'
})
export class ArticleListService {
    nextPage: number = 1;
    /* . . . */
    constructor(private apollo: Apollo) { }

    loadItems() {
        return this.apollo.watchQuery({
            query: GET_LIST_ARTICLE,
            variables: {
                pageNumber: this.nextPage++
            }
        });
    }

}