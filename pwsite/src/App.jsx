import logo from './logo.svg';
import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Menu from './components/menu/Menu'
import "./app.scss"

function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Intro/>
        <Contact/>
        <Portfolio/>
        <Works/>
      </div>
    </div>
  );
}

export default App;
