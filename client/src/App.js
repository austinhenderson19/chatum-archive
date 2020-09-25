import React, { Component } from 'react';

import Backdrop from './components/Backdrop/Backdrop';
import Canvas from './components/Canvas/Canvas';
import Chatum from './containers/Chatum/Chatum';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Backdrop>
          <Canvas>
            <Chatum />
          </Canvas>
        </Backdrop>
      </div>
    );
  }
}

export default App;
