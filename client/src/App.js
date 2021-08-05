import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
//import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import OfferPost from './components/OfferPost/OfferPost';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <Switch>
        <Route path="/register" component={RegisterForm}/>
        <Route path="/offer" component={OfferPost}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
