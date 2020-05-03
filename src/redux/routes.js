import * as ActionTypes from './ActionTypes';

export const Routes = (state = { isLoading: true,
    errMess: null,
    routes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ROUTES:
            return {...state, isLoading: false, errMess: null, routes: action.payload};

        case ActionTypes.ROUTES_LOADING:
            return {...state, isLoading: true, errMess: null, routes: []}

        case ActionTypes.ROUTES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};