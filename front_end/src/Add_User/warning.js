import { useState, useEffect } from 'react';

const Warning = (callback) => {
  const Validate=(values)=>{
    let errors = {};
    if (!values.firstName) {
      errors.first = 'First Name is required';
    } 
    if (!values.lastName) {
      errors.lastName = 'lastName is required';
    } 
    if (!values.cellphone) {
      errors.cellphone = 'Cell Phone value is required';
    } 
    if (!values.city) {
      errors.city = 'City is required';
    } 
    if (!values.subCity) {
      errors.subCity = 'Sub City is required';
    } 
    if (!values.woreda) {
      errors.woreda = 'Woreda is required';
    } 
    if (!values.birthPlace) {
      errors.birthPlace = 'Birth Place is required';
    } 
    if (!values.dob) {
      errors.dob = 'Date Of Birth is required';
    } 
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    if (!values.university) {
      errors.university = 'University Name is required';
    } 
    if (!values.cgpa) {
      errors.cgpa = 'CGPA is required';
    } 
    if (!values.graduationYear) {
      errors.graduationYear = 'Year of graduation is required';
    } 
    if (!values.language) {
      errors.language = 'Language is required';
    } 
    return errors;
  }; 
  
  
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(Validate(values));
    setIsSubmitting(true);
  };

  const handleInputChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleInputChange,
    handleSubmit,
    values,
    errors,
  }
};

export default Warning