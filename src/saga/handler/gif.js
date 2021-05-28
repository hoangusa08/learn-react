import {call , put } from 'redux-saga/effects'
import { requestGetGif , requestSearch } from '../request/gif'
import {setGif , setSearchGif} from '../../actions/gifs'

export function* handleGetGif (action) {
    try {
        const response = yield call(requestGetGif)
        const {data} = response;
        yield put(setGif(data));
    } catch (error) {
        console.log(error)
    }
}
export function* handleSearch (action) {
    try {
        const response = yield call(requestSearch, action.payload)
        const {data} = response;
        yield put(setSearchGif(data));
    } catch (error) {
        console.log(error)
    }
}