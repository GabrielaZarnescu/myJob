  
import React, { useState } from 'react';
import './RegisterForm.css';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';

const RegisterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={`${process.env.PUBLIC_URL}/assets/images/reg_img.png`}  />
        </div>
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default RegisterForm;