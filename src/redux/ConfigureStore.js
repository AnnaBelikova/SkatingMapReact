import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Routes} from'./routes';
import { Comments } from './comments';
import { Users } from './users';
import {News} from'./news';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import { Auth } from './auth';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            routes: Routes,
            news:News,
            comments: Comments,
            users:Users,
            auth: Auth,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;
}