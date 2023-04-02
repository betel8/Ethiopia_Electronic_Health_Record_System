import { useState, useEffect } from 'react';

const Warning = (callback) => {
  function Validate(values){
    let errors = {};
    if (!values.firstName) {
      errors.first = 'First Name is required';
    } 
    if (!values.lastName) {
      errors.lastName = 'lastName is required';
    } 
    if (!values.cellPhone1) {
      errors.cellphone = 'Cell Phone value is required';
    } 
    if (!values.city) {
      errors.city = 'City is required';
    } 
    if (!values.subcity) {
      errors.subCity = 'Sub City is required';
    } 
    if (!values.woreda) {
      errors.woreda = 'Woreda is required';
    } 
    if (!values.birthPlace) {
      errors.birthPlace = 'Birth Place is required';
    } 
    if (!values.dateOfBirth) {
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
    if (!values.universityName) {
      errors.university = 'University Name is required';
    } 
    if (!values.CGPA) {
      errors.cgpa = 'CGPA is required';
    } 
    if (!values.yearOfGraduaion) {
      errors.graduationYear = 'Year of graduation is required';
    } 
    if (!values.language) {
      errors.language = 'Language is required';
    } 
    if (!values.HcpName) {
      errors.HcpName = 'Company Name is required';
    } 
    if (!values.location) {
      errors.location = 'Location is required';
    } 
    if (!values.type) {
      errors.type = 'HCP type is required';
    } 
    if (!values.speciality) {
      errors.speciality = 'Speciality is required';
    } 
    if (!values.owner) {
      errors.owner = 'Owner name is required';
    }
    if (!values.Fyear) {
      errors.Fyear = 'HCP Foundation year is required';
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
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleInputChange,
    handleSubmit,
    values,
    errors,
  }
};

export default Warning