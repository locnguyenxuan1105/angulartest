import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArticleListState } from '../interface/interface';

const INITIAL_STATE: ArticleListState = {
    isLoading: false,
    hasMore: true
};

@Injectable({
    providedIn: 'root'
})
export class ArticleListStateService {

    private _state = new BehaviorSubject<ArticleListState>(INITIAL_STATE);

    state = this._state.asObservable();

    setLoading(loading: boolean) {
        const oldState = this._state.getValue()
        this._state.next({ ...oldState, isLoading: loading });
    }

    setLoadMore(isMore: boolean) {
        const oldState = this._state.getValue()
        this._state.next({ ...oldState, hasMore: isMore });
    }

}

