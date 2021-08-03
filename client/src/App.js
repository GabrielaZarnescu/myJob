import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        
      </Switch>
      </Router>
    </div>
  );
}

export default App;
