import React from 'react'
import { useState } from 'react';
import logo from "../image/logo_with_s.png";
import './Login.css'
import Footer from '../Footer/Footer'
import HomeController from '../Home/HomeController';
import CONSTANT from '../Constant';
import Warning from '../SharedComponents/warning';
import SingleInputContainer from '../SharedComponents/SingleInputContainer';

function Login(props){

  const [failedAtt,setFailedAtt]=useState(false);
  const [Authorization,setAuth]=useState(false);
  const [user,setUser]=useState({username:'',password:''});  
  const login=(user)=>{
    fetch(CONSTANT.SERVER.URL + 'login', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(user)
    }).then(res => {
        const jwtToken = res.headers.get('Authorization');
        if (jwtToken !== null) {
          sessionStorage.setItem("jwt", jwtToken);
          sessionStorage.setItem("ID",res.headers.get('Cookie'));
          setAuth(true);
        }else{
          setFailedAtt(true);
        }
    }).catch(err => console.error(err));
  }
  const {handler,handleSubmit,intergratedValue}=Warning(CONSTANT.LoginInput,login);  
  const LoginInputVzalue=intergratedValue.map((value)=>(<SingleInputContainer name={value.name} type={value.type} handler={handler} 
    onchange={onchange} label={value.label} error={value.error} required={value.required} validationType={value.validationType} />));
    

  const logout=()=>{
    setAuth(false);
    props.pageHandler('');
  }
if(Authorization){
  return(
    <HomeController logout={logout} />
  );
}else{
  return(
    <section className='loginPage'>
          <form onSubmit={handleSubmit}>
          <section className='LoginContent'>
            <img src={logo} alt="company logo" width='130' id= 'img' height='50' className='bigLogo'/>
            <div className='loginInputDiv'>
              {failedAtt?<div className='failedLogin'><strong>Access Denied </strong><p>Invalid Email or Password</p></div>:""}
              {LoginInputVzalue}
              <button id='button' type='submit' className='loginButton'>Login</button> 
              <hr color='#b7b7b7'/>
              <div id='loginFootage'>
                <input type='checkbox' value="Remember me" className='rememberMe'/>
                <label htmlFor='rememberMe'>Remember Me</label>
                <a href='./login.js' className='forgetPassword'>Forget password?</a>
              </div>
            </div>
          </section>
          </form>
          <Footer pageTitle={"Login"} pageHandler={props.pageHandler}/>
    </section>
);

}
}

    export default Login