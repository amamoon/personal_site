import logo from './logo.svg';
import React from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import "./app.scss"

function App() {
  return (
    <div className="App">
      <Topbar/>
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
