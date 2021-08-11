import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './LoginForm.css'
import { useDispatch, useSelector } from 'react-redux';
import { login} from '../actions/authActions';
const LoginForm = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

//nou
const dispatch = useDispatch();

  const state = useSelector(state => {
    return state.userLogin;
  });
  const { loading, userInfo,error} = state;

  useEffect(() => {
    if(userInfo)
        history.push('/')
  }, [state]);


  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));

  };

  return (

    <div className="container">
      <h1 className="title"> Login</h1>
      <form className="form" onSubmit={loginHandler}>
         {error&& <span>{error}</span>}  
         
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
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
          <label htmlFor='password' className='form-label'>
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
        
        <div className="form-button" type="submit">
          <button>Login</button>
          <br/>
          <br/>
          <span className="subsol">New Member? Register <Link to="/register"> here</Link></span>
        </div>
      </form>
    </div>


  );
}

export default LoginForm;
