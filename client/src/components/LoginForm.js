import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import './LoginForm.css'
import { useDispatch, useSelector } from 'react-redux';
import { login} from '../actions/authActions';
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

//nou
const dispatch = useDispatch();

  const state = useSelector(state => {
    return state.userLogin;
  });
  const { loading, userInfo,error} = state;
  const history=useHistory();
 
  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    history.push("/");
  };

  return (

    <div className="containerr">
      <h1 className="titlu"> Login</h1>
      <form className="formm" onSubmit={loginHandler}>
         {error&& <span>{error}</span>}  
         
        <div className='form-inputs'>
          <label htmlFor='email' className='label'>
            Email: 
                </label>
          <input
            type='text' required
            id='email'
            className='input'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}


          />
        </div>

        <div className='form-inputs'>
          <label htmlFor='password' className='label'>
            Password: 
                </label>
          <input
            type="password" required
            id='password'
            className='input'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
          <button className="form-button" type="submit">Login</button>
          <span className="subsol">New Member? Register <Link to="/register"> here</Link>
          </span>
      </form>
    </div>


  );
}

export default LoginForm;
