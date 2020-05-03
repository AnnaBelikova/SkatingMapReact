import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Routes} from'./routes';
import { Comments } from './comments';
import {News} from'./news';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            routes: Routes,
            news:News,
            comments: Comments,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;
}