import React from 'react'
import { useState } from 'react';
import logo from "../image/logo_with_s.png";
import image from "../image/login.jpg"
import './Login.css'
import Footer from '../Footer/Footer'

function Login(props){
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  //change text 
  function handleTextChange(text) {
    setValue(text);
    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
//
  function handleTextChange2(text2) {
    setValue2(text2);
  
    if (text2 !== '') {
      setIsActive2(true);
    } else {
      setIsActive2(false);
    }
  }

    return(
          <section className='loginPage'>
                <section className='LoginCenter'>
                <div className='loginImgholder'><img src={logo} alt="company logo" width='130' id= 'img' height='50' /></div>
                <div className='loginContent'>
                <div id="float-label">
                  <input type="email" value={value} onChange={(e) => handleTextChange(e.target.value)}/><br/>
                  <label className={ isActive ? "Active" : ""} htmlFor="email" >E-mail</label>
                </div>
                <div id="float-label">
                  <input type="password" value={value2} onChange={(e) => handleTextChange2(e.target.value2)}/><br/>
                  <label className={ isActive2 ? "Active2" : ""} htmlFor="password" >Password</label>
                </div>
                <button id='button' onClick={0}>Login</button> 
                <div id='loginFootage'>
                  <input type="checkbox" value="Remember me"/>Remember Me &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
                  <a href='./login.js'>Forget password?</a>     
                </div></div>
                </section>
               
               
                <Footer pageTitle={"Login"} pageHandler={props.pageHandler}/>
          </section>
    );
    }

    export default Login