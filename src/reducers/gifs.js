import * as allAction from '../constant/constant'

var  initalState =  [
        {
        id: 1,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g"
        },
        {
        id: 2,
        url: "https://znews-photo.zadn.vn/Uploaded/hmniv/2021_04_15/quiz_result_r92.gif"
        },
        {
        id: 3,
        url: "https://st.quantrimang.com/photos/image/2016/09/17/anh-2.gif"
        },
        {
        id: 4,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g"
        },
        {
        id: 5,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g"
        },
        {
        id: 6,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g"
        },
        {
        id: 7, 
        url: "https://st.quantrimang.com/photos/image/2016/09/17/anh-2.gif"
        } ,
        {
        id: 8,
        url: "https://media0.giphy.com/media/LRsMaCckjrvJdQLn7w/giphy.gif?cid=4e4f4969pm8j3tcs91cmgmujseh757hwsle7p948idjenup0&rid=giphy.gif&ct=g"
        },
    ]

const gifs = (state = initalState , action) => {
    switch (action.type) {
        case allAction.ADD_GIF :
            let temp = { id : (state.length+1),
                url : action.payload}
            return [...state, temp ];
        case allAction.REMOVE_GIF :
            if(action.payload !== "")
                state.splice(parseInt(action.payload,10), 1)
            return [...state];
        case allAction.SET_GIF :
            let tempSetGif = []
            for ( const gif of action.payload) {
                tempSetGif.push({
                    id : gif.id,
                    url : gif.images.original.url
                })
            }
            return [...state, ...tempSetGif];
        case allAction.SET_SEARCH_GIF :
            let tempSetSearchGif = []
            for ( const gif of action.payload) {
                tempSetSearchGif.push({
                    id : gif.id,
                    url : gif.images.original.url
                })
            }
            return [...tempSetSearchGif];
        default :
            return state
    }
}
export default gifs ;
