import React, { Component } from 'react';
import './App.css';
import FirstComponent from './components/examples/FirstComponent'
import SecondComponent from './components/examples/SecondComponent'
import ThirdComponent from './components/examples/ThirdComponent'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <LearningComponents></LearningComponents>
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        Hello world!
        <FirstComponent></FirstComponent>
        <SecondComponent/>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

export default App;