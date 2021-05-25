import counter from './counter'
import {combineReducers} from 'redux'
import {createStore} from 'redux'
import gifs from './gifs';

const rootReducer = combineReducers({
    counter,
    gifs});
 
export default createStore(rootReducer) ;