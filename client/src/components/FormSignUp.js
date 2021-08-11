import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {register} from '../actions/authActions';
import {Link, useHistory} from 'react-router-dom';
import './RegisterForm.css'

const FormSignUp = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [type,setType]=useState("");
    const [password2,setPassword2]=useState("");
    const [errors,setErrors]=useState("");
    const dispatch = useDispatch();
    const state = useSelector(state => {
        return state.userLogin;
      });
    const { loading, userInfo, error } = state;
    const history=useHistory();
    
    const registerHandler = async (e) => {
        e.preventDefault();
        if(password.length<6)
        setErrors("Password minimum length is 6");
        setTimeout(() => {
          setErrors("");
        }, 5000);
      console.log({name,email,password,type})
        dispatch(register(name,email,password,type));
        history.push("/");
    };


    return (
        <div className="form-content-right">
            <form  className="form" onSubmit={registerHandler}>
            {errors&&<span>{errors}</span>}
                <br/>
                <h1>Get started with us today! Create your account filling out the information below </h1>
                <div className="form-inputs">
                    <label htmlFor="type" className="form-label">
                        Who do you represent?
                    </label>
                    <select className="form-input" onChange={(e)=>setType(e.target.value)}>
                        <option>Company</option>
                        <option>Student</option>
                    </select>
                </div>

                <div className="form-inputs">
                <label htmlFor="name"
                    className="form-label">
                Full name:
                </label>
                <input required
                    id='fullname'
                    type ="text" 
                    name="name"
                    className="form-input"
                    placeholder='Enter your firstname'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    /> 
                </div>
                <div className="form-inputs">
                <label htmlFor="email"
                    className="form-label">
                         Email
                </label>
                <input required
                    id='email'
                     type ="email" 
                     name="email"
                    className="form-input"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input required
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    ></input>
                               
                    </div>
                <div className="form-inputs">
                <label htmlFor="password2"
                    className="form-label">
                         Confirm Password
                </label>
                <input required
                    id='password2'
                     type ="password" 
                     name="password2"
                    className="form-input"
                    placeholder='Enter your password'
                    value={password2}
                    onChange={(e)=>setPassword2(e.target.value)}
                    />
                </div>
                <button className="form-input-btn" type='submit'>
                    Sign Up
                     </button>
                     <span className='form-input-login'>
                         Already have an account? Login <Link to="/loginn">here</Link>
                     </span>
            </form>
        </div>  
    )
}
export default FormSignUp;
