import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/home'
import Signup from './components/signup'
import Article from './components/article'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
class App extends React.Component {
  render(){return (
    <div className="App">
      
    <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/:id' component={Article}></Route>
    </Switch>
    </BrowserRouter>
    </div>
  )}
}

export default App;
