import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hello'

function App() {
  return (
    <div className="App">
    <Greet name= 'BD'>
      <p>Joybangla child prop</p>
    </Greet>
    <Welcome/>
    <Hello/>
    </div>
  );
}

export default App;
