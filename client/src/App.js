import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
//import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import OfferPost from './components/OfferPost/OfferPost';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Posts from './components/Posts';
import ReqPosts from "./components/ReqPosts";
import MakePost from './pages/MakePost';
import PostDetail from "./components/PostDetails";
function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <Switch>
        <Route path="/register" component={RegisterForm}/>
        <Route path="/makepost" component={MakePost}/>
        <Route path="/offer" component={OfferPost}/>
        <Route path="/request" component={ReqPosts}/>
        <Route path="/loginn" component={LoginForm}/>
        <Route path="/posts" component={Posts}/>
        <Route exact path="/details/:id" component={PostDetail}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
