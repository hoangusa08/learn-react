import {takeLatest} from 'redux-saga/effects'
import { handleGetGif } from './handler/gif'
import { GET_GIF } from '../actions/gifs'

export function* watcherSaga () {
    yield takeLatest(GET_GIF, handleGetGif)
}
