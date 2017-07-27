import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Inheritance, {Parent} from './Inheritance';
import {withData} from './enhancer'
import DumbComponent from './Post'


const SmartComponent = withData(DumbComponent, (props) => ({posts: props}));


class App extends Component {
  render() {
    return (
      <div className="App">
        <SmartComponent/>
      </div>
    );
  }
}

export default App;
