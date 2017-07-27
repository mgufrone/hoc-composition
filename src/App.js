import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Dimmer, Loader} from 'semantic-ui-react'
import Inheritance, {Parent} from './Inheritance';
import {withData, loadData} from './enhancer'
import DumbComponent from './Post'
import LoadingComponent from './loading';

const SmartComponent = withData(DumbComponent, (props) => ({posts: props}));
const SmarterComponent = loadData(
  'https://jsonplaceholder.typicode.com/posts',
  (props) => ({posts: props})
)(DumbComponent, LoadingComponent);


class App extends Component {
  render() {
    return (
      <div className="App">
        <SmarterComponent/>
      </div>
    );
  }
}

export default App;
