import {call , put } from 'redux-saga/effects'
import { requestGetGif } from '../request/gif'
import {setGif} from '../../actions/gifs'

export function* handleGetGif (action) {
    try {
        const response = yield call(requestGetGif)
        const {data} = response;
        yield put(setGif(data));
    } catch (error) {
        console.log(error)
    }
}