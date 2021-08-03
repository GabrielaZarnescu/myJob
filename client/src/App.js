import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


import Homepage from './components/Homepage';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <Router>
      <RegisterForm/>
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
