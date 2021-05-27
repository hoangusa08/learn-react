export const GET_GIF = 'GET_GIF'

export const addGif = (num) => {
    return {
        type : 'ADD_GIF',
        payload : num.url
    }
}
export const removeGif = (num) => {
    return {
        type : 'REMOVE_GIF',
        payload : num.id
    }
}
export const getGif = () => {
    return {
        type : GET_GIF
    }
}
export const setGif = (data) => {
    return {
        type : 'SET_GIF', 
        payload : data.data
    }
}
