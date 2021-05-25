import {connect} from 'react-redux'
import  Home from '../components/home'
import  allAction from '../actions'
const mapStateToProps = (state) =>{
    return {
        gifs : state.gifs
    }
}

const mapDispatchToProps =  {
    addGif : allAction.gif.addGif
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
