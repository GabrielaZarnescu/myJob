export default function validateInfo(values) {
    let errors = {};
    if (!values.firstname) {
      errors.firstname = 'Firstname is required';}
    else if (!/^[A-Za-z]+/.test(values.firstname)) {
      errors.firstname = 'Enter a valid name';
    }if (!values.lastname) {
      errors.lastname = 'Last is required';}
    else if (!/^[A-Za-z]+/.test(values.lastname)) {
     errors.lastname = 'Enter a valid name';
   }if (!values.address) {
     errors.address = 'Addres is required';
   }
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    
    return errors;
  }