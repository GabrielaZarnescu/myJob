import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Button} from "../Button/Button";
import './OfferPost.css'
const OfferPost = ({history}) => {
  const [proglang,setProglang]=useState("");
  const [work,setWork]=useState("");
  const [location,setLocation]=useState("");
  const [description,setDescription]=useState("");
  const [error,setError]=useState("");
  const addHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
      "Content-type": "application/json",
      },
    };
    try {
      const {data} = await axios.post(
        "api/offers",
        {proglang,work,location,description},
        config
      );
      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(()=> {
        setError("");
      }, 5000);
    };
  }
  return (
    <div className="container">
      
<div className="left"> 
<p className="title">Create an offer</p>
    <form onSubmit={addHandler}>
      {error&&<span>{error}</span>}
      <div class="form-group">
        <label for="input1">Select programming language: </label>
        <select class="form-control" id="input1" required
            onChange={(e)=>setProglang(e.target.value)}>
          <option>JavaScript</option>
          <option>Java</option>
          <option>React</option>
          <option>C/C++</option>
          <option>C#</option>
          <option>Ruby</option>
        </select>
      </div>
      <div class="form-group">
        <label for="input2">Select work hours: </label>
        <select class="form-control" id="input2" required
            onChange={(e)=>setWork(e.target.value)}>
          <option>full time</option>
          <option>part time</option>
        </select>
      </div>
      <div class="form-group">
        <label for="input3">Select location: </label>
        <select class="form-control" id="input3" required
            onChange={(e)=>setLocation(e.target.value)}>
          <option>Remote</option>
          <option>Timisoara</option>
        </select>
      </div>
      <div class="form-group">
        <label for="input4">Add a description for the job: </label>
        <textarea class="form-control" id="input4" rows="3" required
            onChange={(e)=>setDescription(e.target.value)}></textarea>
      </div>
      <Button type="submit">Done</Button>
    </form>
</div>
<div className="right">
<img src={`${process.env.PUBLIC_URL}/assets/images/idk.png`}/>
{/*<i class="fas fa-address-card"></i>*/}
  
</div>
</div>
  )}
    export default OfferPost;