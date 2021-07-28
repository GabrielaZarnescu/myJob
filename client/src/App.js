import React, {Component} from 'react';
import Navbar from './components/Navbar'
import './App.css';
import FormSuccess from './FormSuccess';
import RegisterForm from './RegisterForm';


function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <RegisterForm/>
    </div>
  );
}

export default App;
