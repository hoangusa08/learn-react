import counter from './counter'
import {combineReducers} from 'redux'
import {createStore} from 'redux'

const rootReducer = combineReducers({counter});
 
export default createStore(rootReducer) ;