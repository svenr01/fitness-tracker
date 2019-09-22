import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../auth.actions';
import { Action } from '@ngrx/store';


export interface State {
    isAuthenticated: boolean;
}

const initialState: State = {
    isAuthenticated: false
};

export function authReducer(state = initialState, action: AuthActions) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                isAuthenticated: true
            };
        case SET_UNAUTHENTICATED:
            return {
                isLoading: false
            };
        default: 
        return state;
    }
}

export const getIsAuth = (state: State) => state.isAuthenticated;