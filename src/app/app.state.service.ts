import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppState } from './interface/interface';

const INITIAL_STATE: AppState = {
    isLoading: false
};

@Injectable({
    providedIn: 'root'
})
export class StateService {

    private _state = new BehaviorSubject<AppState>(INITIAL_STATE);

    state = this._state.asObservable();

    setLoading(loading: boolean) {
        const oldState = this._state.getValue()
        this._state.next({ ...oldState, isLoading: loading });
    }

}

