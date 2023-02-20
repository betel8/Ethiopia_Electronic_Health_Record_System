import React from 'react'
import { useState } from 'react';
//import Welcome from './Welcome';
import image from "./image/login.jpg"
import logo from "./image/logo.png"
import './Login.css'
function Login(){
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  function handleTextChange(text) {
    setValue(text);
  
    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function handleTextChange2(text2) {
    setValue2(text2);
  
    if (text2 !== '') {
      setIsActive2(true);
    } else {
      setIsActive2(false);
    }
  }
  function loginHandler(){
    
    window.location.href='./Welcome';
  // <Welcome/>
    };
    return(
        
        <div >
    <div className='loginPage'>
        <form >
            
        <img src={logo} alt="" width='130' id= 'img' height='50' />
            <img  src={image} alt="" width='60' id= 'img2' height='60' />
         <p className='p'>Login</p>
         
  <div id="float-label">
         <input type="email" value={value} onChange={(e) => handleTextChange(e.target.value)}/><br/>
       <label className={ isActive ? "Active" : ""} htmlFor="email" >E-mail</label>
  </div>
  <div id="float-label">
  <input type="password" value={value2} onChange={(e) => handleTextChange2(e.target.value2)}/><br/>
    <label className={ isActive2 ? "Active2" : ""} htmlFor="password" >Password</label>
    </div>
    <div id='loginFootage'>
        <input type="checkbox" value="Remember me"/>Remember Me &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
        <a href='./login.js'>Forget password?</a>  <br/><br/><br/><br/>
        <a href='./login.js'>Create Account</a>  
        <button id='button' onClick={()=>loginHandler()}>Login</button>     
        </div>
    </form>
    </div>
    </div>
    );
    }
    export default Login