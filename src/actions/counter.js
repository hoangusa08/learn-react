const increment = (num) => {
    return {
        type : 'INCREMENT',
        payload : num
    }
}
const decrement = (num) => {
    return {
        type : 'DECREMENT',
        payload : num
    }
}
export default {increment , decrement };