import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/message'
import Counter from './components/counter'

function App() {
  return (
    <div className="App">
    {/* <Greet name= 'BD'>
      <p>Joybangla child prop</p>
    </Greet>
    <Welcome/>
    <Hello/> */}
    {/* <Message/> */}
    <Counter/>
    </div>
  );
}

export default App;
