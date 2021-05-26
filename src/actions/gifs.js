export const addGif = (num) => {
    return {
        type : 'ADDGIF',
        payload : num.url
    }
}
export const removeGif = (num) => {
    return {
        type : 'REMOVEGIF',
        payload : parseInt(num.id,10)
    }
}
