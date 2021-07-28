  
import React, { useState } from 'react';
import './RegisterForm.css';
import FormSignUp from './FormSignUp';


const RegisterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        <div className='form-content-left'>
          <img className='form-img' src={`${process.env.PUBLIC_URL}/assets/images/reg_img.png`}  />
        </div>
        
          <FormSignUp submitForm={submitForm} />
       
        
      </div>
    </>
  );
};

export default RegisterForm;