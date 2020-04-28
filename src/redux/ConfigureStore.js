import {createStore, combineReducers} from 'redux';
import {Routes} from'./routes';
import { Comments } from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            routes: Routes,
            comments: Comments
        })
    );
    
    return store;
}