import React, { Component } from 'react';

import Backdrop from './components/Backdrop/Backdrop';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Backdrop />
      </div>
    );
  }
}

export default App;
