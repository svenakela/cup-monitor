import React, { Component } from 'react';
import CupLogo from './CupLogo';
import './App.css';
import GameSchedule from './GameSchedule'

class App extends Component {
  render() {
    return (
      <div>
        <CupLogo />
        <GameSchedule />
      </div>
    );
  }
}

export default App;