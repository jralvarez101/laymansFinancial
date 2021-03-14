
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
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
          </Switch>
      </div>
    </Router>
  );
}

export default App;
