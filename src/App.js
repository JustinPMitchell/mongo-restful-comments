import React, { Component } from 'react';
import CommentBox from './CommentBox.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Team Tustin</h1>
        <CommentBox />
      </div>
    );
  }
}

export default App;
