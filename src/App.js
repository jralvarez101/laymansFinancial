
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Header/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
