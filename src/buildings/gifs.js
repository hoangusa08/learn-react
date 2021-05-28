import {connect} from 'react-redux'
import  Home from '../components/home'
import * as all from '../actions/gifs'

const mapStateToProps = (state) =>{
    return {
        gifs : state.gifs
    }
}

const mapDispatchToProps =  {
    addGif : all.addGif,
    removeGif : all.removeGif,
    setGif : all.setGif , 
    getGif : all.getGif,
    searchGif : all.searchGif
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
