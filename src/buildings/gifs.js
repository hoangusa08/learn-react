import {connect} from 'react-redux'
import  Home from '../components/home'
import {addGif}from '../actions/gifs'

const mapStateToProps = (state) =>{
    return {
        gifs : state.gifs
    }
}

const mapDispatchToProps =  {
    addGif : addGif
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
