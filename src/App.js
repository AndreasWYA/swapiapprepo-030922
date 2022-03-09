import logo from './logo.svg';
import './App.css';
import React from 'react';
import Characters from "./components/Characters";

class App extends React.Component{
  render(){
    return(
      <div>
        <Characters />
      </div>
    )
  }
}

export default App;
