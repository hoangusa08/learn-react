import {connect} from 'react-redux'
import  Home from '../components/home'
import {addGif, removeGif}from '../actions/gifs'

const mapStateToProps = (state) =>{
    return {
        gifs : state.gifs
    }
}

const mapDispatchToProps =  {
    addGif : addGif,
    removeGif : removeGif
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
