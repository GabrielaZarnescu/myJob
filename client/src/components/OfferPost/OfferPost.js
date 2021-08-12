import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router';
import {Button} from "../Button/Button";

import './OfferPost.css'
const OfferPost = (props) => {
  const [progLang,setProgLang]=useState("");
  const [workTime,setWorkTime]=useState("");
  const [location,setLocation]=useState("");
  const [description,setDescription]=useState("");
  const [error,setError]=useState("");
  const dispatch=useDispatch();
  const state = useSelector(state => {
    return state.userLogin;
  });
  const {userInfo} = state;
  const history=useHistory();
  const addHandler = async (e) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    e.preventDefault();
    console.log(userInfo);
    const userId=userInfo._id;
    console.log(userId);
   const {data} = await axios.post(
     "offers/create",
     {progLang,workTime,location,description,userId},
     config
   )
    history.push("/");
    };
  return (
    <div className="container">
      
<div className="left"> 
<p className="title">Create an offer</p>
    <form onSubmit={addHandler}>
      {error&&<span>{error}</span>}
      <div class="form-group">
        <label for="input1">Select programming language: </label>
        <select class="form-control" id="input1" required
            onChange={(e)=>setProgLang(e.target.value)}>
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
            onChange={(e)=>setWorkTime(e.target.value)}>
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