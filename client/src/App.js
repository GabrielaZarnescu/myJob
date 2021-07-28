import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import Homepage from './components/Homepage';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <Router>
    <div className="App"> 
      <Navbar/>
      <Switch>
        
        <Route path="/register" component={RegisterForm}/>
        <Route exact path="/" component={Homepage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
