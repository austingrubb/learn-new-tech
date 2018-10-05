import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='http://www.stickpng.com/assets/images/5848309bcef1014c0b5e4a9a.png' className="App-logo" alt="logo" />
            Learn Redux
            <div>
              <Test/>
            </div>
        </header>
      </div>
    );
  }
}

export default App;

