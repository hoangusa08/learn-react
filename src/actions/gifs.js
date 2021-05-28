import * as key from '../constant/constant'
export const addGif = (num) => {
    return {
        type : key.ADD_GIF,
        payload : num.url
    }
}
export const removeGif = (num) => {
    return {
        type : key.REMOVE_GIF,
        payload : num.id
    }
}
export const getGif = () => {
    return {
        type : key.GET_GIF
    }
}
export const setGif = (data) => {
    return {
        type : key.SET_GIF, 
        payload : data.data
    }
}
export const setSearchGif = (data) => {
    return {
        type : key.SET_SEARCH_GIF, 
        payload : data.data
    }
}
export const searchGif = (num) => {
    return {
        type : key.SEARCH_GIF,
        payload : num.searchStr
    }
}
