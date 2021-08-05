import React from 'react';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Button} from "../Button/Button";
import './OfferPost.css'
const OfferPost = ({}) => {
  
  return (
    <div className="container">
      
<div className="left"> 
<p className="title">Create an offer</p>
    <form>
      <div class="form-group">
        <label for="input1">Select programming language: </label>
        <select class="form-control" id="input1">
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
        <select class="form-control" id="input2">
          <option>full time</option>
          <option>part time</option>
        </select>
      </div>
      <div class="form-group">
        <label for="input3">Select location: </label>
        <select class="form-control" id="input3">
          <option>Remote</option>
          <option>Timisoara</option>
        </select>
      </div>
      <div class="form-group">
        <label for="input4">Add a description for the job: </label>
        <textarea class="form-control" id="input4" rows="3"></textarea>
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