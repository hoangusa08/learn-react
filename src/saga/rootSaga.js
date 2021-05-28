import {takeLatest} from 'redux-saga/effects'
import { handleGetGif , handleSearch} from './handler/gif'
import { GET_GIF , SEARCH_GIF } from '../constant/constant'

export function* watcherSaga () {
    yield takeLatest(GET_GIF, handleGetGif)
    yield takeLatest(SEARCH_GIF , handleSearch)
}
