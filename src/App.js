
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import {Switch, Route} from 'react-router-dom';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';
// import About from './components/About';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <Header/>
      <MainHeader/>
      <Features/>
      <Search/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
