import React from 'react';
import useFormC from './useFormC';
import validate from './validateInfoC';
import './form.css'

const FormSignUpC = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useFormC(
      submitForm,
      validate
    );
  

    return (
        <div className="form-content-rigt">
            <form action="" className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your account filling out the information below </h1>
                <div className="form-inputs">
                <label htmlFor="company"
                    className="form-label">
                Company
                </label>
                <input
                    id='company'
                    type ="text" 
                    name="company"
                    className="form-input"
                    placeholder='Enter your company name'
                    value={values.company}
                    onChange={handleChange}
                    ></input>
                    {errors.company && <p>{errors.company}</p>}
                </div>
                
                <div className="form-inputs">
                <label htmlFor="address"
                    className="form-label">
                Address
                </label>
                <input
                    id='address'
                    type ="text" 
                    name="address"
                    className="form-input"
                    placeholder='Enter your address'
                    value={values.address}
                    onChange={handleChange}
                    ></input>
                    {errors.address && <p>{errors.address}</p>}
                </div>
                <div className="form-inputs">
                <label htmlFor="email"
                    className="form-label">
                         Email
                </label>
                <input
                    id='email'
                     type ="email" 
                     name="email"
                    className="form-input"
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={handleChange}
                    ></input>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    ></input>
                    {errors.password && <p>{errors.password}</p>}              
                    </div>
                <div className="form-inputs">
                <label htmlFor="password2"
                    className="form-label">
                         Confirm Password
                </label>
                <input
                    id='password2'
                     type ="password" 
                     name="password2"
                    className="form-input"
                    placeholder='Enter your password'
                    value={values.password2}
                    onChange={handleChange}
                    ></input>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type='submit'>
                    Sign Up
                     </button>
                     <span className='form-input-login'>
                         Already have an account? Login <a href='#'>here</a>
                     </span>
            </form>
        </div>  

    )
}

export default FormSignUpC;
