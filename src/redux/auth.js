import * as ActionTypes from './ActionTypes';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
let newinfo='';
newinfo=localStorage.getItem('info') ? newinfo=JSON.parse(localStorage.getItem('info')) : null
export const Auth = (state = {
        isLoading: false,
        isAuthenticated: newinfo===null ? false : newinfo.user_id,
        user: localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')) : null,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated: false,
                user: action.dataT
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {...state,
                isLoading: false,
                isAuthenticated: true,
                user: JSON.parse(localStorage.getItem('info')),
                errMess: '',
            };
        case ActionTypes.LOGIN_FAILURE:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                errMess: action.message
            };
        case ActionTypes.LOGOUT_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated: true
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                user_id: '',
                user: null
            };
        default:
            return state
    }
}