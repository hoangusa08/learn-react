import axios from 'axios'

export function requestGetGif () {
    console.log(process.env.REACT_APP_URL_GIF_API)
    return axios.request({
        method: 'get',
        url : process.env.REACT_APP_URL_GIF_API,
    })
}
export function requestSearch (searchStr) {
    return axios.request({
        method: 'get',
        url : process.env.REACT_APP_URL_GIF_SEARCH_API+searchStr
    })
}
