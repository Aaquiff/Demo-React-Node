import React, { Component } from 'react';
import './App.css';

import Books from './Books/Books.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Books></Books>
      </div>
    );
  }
}

export default App;
