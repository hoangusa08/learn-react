
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Headers from './components/header'
import Home from './buildings/gifs'
import Counter from './components/counter'
function App() {
  return (
    <div >
      <Router>
        <Headers/>
        <Switch>
          <Route path = "/" exact component={Home}></Route>
          <Route path = "/counter" exact component={Counter}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
