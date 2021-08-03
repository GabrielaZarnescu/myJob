import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
//import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <Home/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/register" component={RegisterForm}/>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
