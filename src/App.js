import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import React from 'react'
import ReactDOM from 'react-dom'
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>    
        <Navbar />
      <Routes>           
            <Route path='/' exact element={<Home />} />          
            <Route path='/menu' exact element={<Menu />} />          
            <Route path='/about' exact element={<About />} />          
      </Routes>
      <Footer />
      </Router>
    
    </div>
  );
}

export default App;
