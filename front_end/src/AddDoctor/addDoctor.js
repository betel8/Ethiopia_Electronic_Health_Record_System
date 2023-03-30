import React, { useState } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Warning from './warning';
import {FaExclamationTriangle} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';

import './addDoctor.css'
function AddDoctor() {
  function Validate(values) {
    let errors = {};
    if (!values.first) {
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
  const {
    values,
    errors,
    handleInputChange,
    handleSubmit,
  } = Warning(add, Validate);
  function add() {
    console.log('No errors, submit callback called!');
  }

  

  return (
    <div>
      <Header pageTitle={"ADD Doctor"} pageholder={PaymentResponse.pageHandler} />
      <span id="add">ADD DOCTOR</span>

      <h3 className="title">Personal Information</h3>

   <form  onSubmit={handleSubmit}>
       
       <div className="input-container">
        <input type="text"  id='first-name' className= 'warning'  name="firstName" value={values.first || ''}  onChange={handleInputChange}/>
          <label htmlFor='first-name'>
            First Name
          </label>
          {errors.first && (
                    <p className="warning"><FaExclamationTriangle/>{errors.first}</p>
                  )}
          </div>
          <div className="input-container">
         <div className='leftInput'>
          <input type="text"  id='last-name' className= 'warning'  name="last" value={values.lastName || ''} onChange={handleInputChange}/>
          <label id ="leftLabel"htmlFor='last-name'>
            Last Name
          </label>
          {errors.lastName && (
                    <p className="warning"><FaExclamationTriangle/>{errors.lastName}</p>
                  )}
          

          </div>
        </div>
       <div className="input-container">
          <input type="text" className= 'warning'  name="cellphone" value={values.cellphone || ''} onChange={handleInputChange} id='cellphone1'/>
          <label htmlFor='cellphone1'>
            Cellphone1
          </label>
          {errors.cellphone && (
                    <p className="warning"><FaExclamationTriangle/>{errors.cellphone}</p>
                  )}
          </div>
          <div className="input-container">
          <div className='leftInput'>
          <input type="text"  id='cellphone2'/>
          <label id ="leftLabel"htmlFor='cellphone2'>
            Cellphone2(optional)
          </label>
          </div>
          </div>
          <div className='cityContainer'>
       <div className="input-container">
          <input type="text" className= 'warning' onChange={handleInputChange}  name="city" value={values.city || ''}  id='city'/>
          <label htmlFor='city'>
           City
          </label>
          {errors.city && (
                    <p className="warning"><FaExclamationTriangle/>{errors.city}</p>
                  )}
          </div>
          </div>

          <div className='sub-cityContainer'>
          <div className="input-container">
          <input type="text"  className= 'warning' onChange={handleInputChange}  name="subcity" value={values.subCity || ''}  id='sub-city'/>
          <label id="subcitylabel"htmlFor='sub-city'>
           Sub City
          </label>
          {errors.subCity && (
                    <p className="warning"><FaExclamationTriangle/>{errors.subCity}</p>
                  )}
          </div>
          </div>
          
          <div className="input-container">
            <div className='woredaContainer'>
          <input type="number" className= 'warning' onChange={handleInputChange}  name="woreda" value={values.woreda || ''}  id='woreda'/>
          <label id="woredalabel"htmlFor='woreda'>
          Woreda
          </label>
          {errors.woreda && (
                    <p className="warning"><FaExclamationTriangle/>{errors.woreda}</p>
                  )}
          </div>
          </div>
   
          <div className="input-container">
      
          <input type="text" className= 'warning' onChange={handleInputChange}  name="Bplace" value={values.birthPlace || ''}  id='Bplace'/>
          <label htmlFor='Bplace'>
           Birth place
          </label>
          {errors.birthPlace && (
                    <p className="warning"><FaExclamationTriangle/>{errors.birthPlace}</p>
                  )}
          </div>
          <div className="input-container">
        <input type="date" className= 'warning' onChange={handleInputChange}  name="dob" value={values.dob || ''}  id='dob'/>
          <label htmlFor='dob'>
            Date Of Birth
          </label>
          {errors.dob && (
                    <p className="warning"><FaExclamationTriangle/>{errors.dob}</p>
                  )}
          </div>
       
          <h3 className="title">Account Information</h3>
          <div className="input-container">
      
      <input type="email"  id='email' className= 'warning'  name="email" value={values.email || ''}  onChange={handleInputChange} required /><FaEnvelope style={{marginLeft:'-2vw'}}/>
                   <label htmlFor='email'>
       Email
      </label>
                  {errors.email && (
                    <p  className=" warning">{errors.email}</p>
                  )}
    
    
      </div>
      <div className="input-container">
      
      <input type="password" className= 'warning' onChange={handleInputChange}  name="password" value={values.password || ''}  id='password'/>
      <label htmlFor='password'>
       Password
      </label>
      {errors.password && (
                    <p className="warning"><FaExclamationTriangle/>{errors.password}</p>
                  )}
      </div>
      <h3 className="title">Acadamy Information</h3>
          <div className="input-container">
      
      <input type="text" className= 'warning' onChange={handleInputChange}  name="Uname" value={values.university || ''}  id='Uname'/>
      <label htmlFor='Uname'>
       University Name
      </label>
      {errors.university && (
                    <p className="warning"><FaExclamationTriangle/>{errors.university}</p>
                  )}
      </div>
      <div className="input-container">
         <div className='leftInput'>
          <input type="date" className= 'warning' onChange={handleInputChange}  name="Gyear" value={values.graduationYear || ''}  id='Gyear'/>
          <label id ="leftLabel"htmlFor='Gyear'>
            Year Of Graduaion
          </label>
          {errors.graduationYear && (
                    <p className="warning"><FaExclamationTriangle/>{errors.graduationYear}</p>
                  )}
          </div>
        </div>
      <div className="input-container">
      
      <input type="number" className= 'warning' onChange={handleInputChange}  name="cgpa" value={values.cgpa || ''}  id='cgpa'/>
      <label htmlFor='cgpa'>
       CGPA
      </label>
      {errors.cgpa && (
                    <p className="warning"><FaExclamationTriangle/>{errors.cgpa}</p>
                  )}
      </div>
      <div className="input-container">
         <div className='leftInput'>
          <input type="text" className= 'warning' name="language" onChange={handleInputChange}   value={values.language || ''}   id='language'/>
          <label id ="leftLabel"htmlFor='language'>
            Language
          </label>
          {errors.language && (
                    <p className="warning"><FaExclamationTriangle/>{errors.language}</p>
                  )}
          </div>
        </div>
       
<button>Register</button>
</form> 
      <Footer pageTitle={"Doctor"} />
    </div>
    
  );


}







export default AddDoctor