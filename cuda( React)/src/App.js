import React from 'react';
import './App.css';
import './style.css';
import Welcome from './welcome.js';
import Services from './services.js';
import Team from './team.js';
import Skills from './skills.js';
import Portfolio from './portfolio.js';
import Testimonials from './testimonials.js';
import GetInTouch from './getintouch.js';

class App extends React.Component{
  render(){
    return(
      <div>
        <Welcome/>
        <Services/>
        <Team/>
        <Skills/>
        <Portfolio/>
        <Testimonials/>
        <GetInTouch/>
      </div>
    )
  }
}

export default App;
