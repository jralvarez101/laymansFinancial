
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Results from './pages/Results';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'





function App() {
  return (
    <Router>
      <div >
        <Header/>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route exact path='/results' component={Results}/>
            <Route exact path='/results/:tickerID' component={Results}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
