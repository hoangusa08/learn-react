import axios from 'axios'

export function requestGetGif () {
    return axios.request({
        method: 'get',
        url : 'https://api.giphy.com/v1/gifs/trending?api_key=dfQgRJCnTbmZIr6Z6QJ94S7pRNJsdch9&limit=16'
    })
}
