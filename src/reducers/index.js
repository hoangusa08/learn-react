import counter from './counter'
import {combineReducers} from 'redux'
import {createStore , compose , applyMiddleware} from 'redux'
import gifs from './gifs';
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from '../saga/rootSaga';

const sagaMiddleWare = createSagaMiddleware()
const composeEnhancers = 
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotreload : false,
        })
        : compose;

const configureStore = () => {
    const middlewares =[sagaMiddleWare] 
    const enhancers = applyMiddleware(...middlewares);
    const rootReducer = combineReducers({
        counter,
        gifs});
    const store = createStore(rootReducer ,composeEnhancers(enhancers));
    sagaMiddleWare.run(watcherSaga)
    return store;
}
 
export default configureStore ;
