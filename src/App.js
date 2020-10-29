import logo from './logo.svg';
import './App.css';
// components
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/counter'
import ParentCom from './components/ParentCom'
import Clock from './components/Clock'
import Toggler from './components/toggler'
import LoginControl from './components/loginControl'
import Page from './components/ShowWarning'
import Blog from './components/ListItems'
import Form from './components/FormSubmit'
import DropDown from './components/DropDown'

function App() {
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  return (
    
    <div className="App">
      <DropDown/>
      {/* <Form/> */}
      {/* <Blog  posts={posts}/> */}
      {/* <Page/> */}
      {/* <LoginControl/> */}
      {/* <Toggler/> */}
      {/* <Clock/> */}
      {/* <ParentCom/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name='Nishad' code='vsCode'>
          hello i am child props
      </Greet>
      <Greet name='Nishad2' code='JSCode'>
        <button>kaBoom</button>
      </Greet>
      <Welcome name  = 'bangladesh'>
        <button>This button belongs to BD</button>
      </Welcome> */}
    </div>
  );
}

export default App;
