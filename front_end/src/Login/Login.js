import React from 'react'
import { useState } from 'react';
import logo from "../image/logo_with_s.png";
import './Login.css'
import Footer from '../Footer/Footer'
import { FaEyeSlash} from "react-icons/fa"
import { FaEye } from 'react-icons/fa';
import HomeController from '../Home/HomeController';
import CONSTANT from '../Constant';

function Login(props){

  const [passwordShow, setPasswordShow]=useState(false);
  const [failedAtt,setFailedAtt]=useState(false);
  const [Authorization,setAuth]=useState(false);
  const [user,setUser]=useState({username:'',password:''});
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  //showPassword
  const showPassword =()=>{
    setPasswordShow(!passwordShow);
  }
  //change text 
  const handleTextChange=(event)=> {
    setUser({...user,[event.target.name]:event.target.value});
    if(event.target.name==='username'){
      if (event.target.value !== '') {  
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }else {
      if (event.target.value !== '') {
        setIsActive2(true);
      } else {
        setIsActive2(false);
      }
    }
    
  }
  const login=(e)=>{
    if(e)e.preventDefault();
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
          <form onSubmit={login} method='post'>
          <section className='LoginContent'>
            <img src={logo} alt="company logo" width='130' id= 'img' height='50' className='bigLogo'/>
            <div className='loginInputDiv'>
              {failedAtt?<div className='failedLogin'><strong>Access Denied </strong><p>Invalid Email or Password</p></div>:""}
              <div id="float-label">
                <input type="text" value={user.username} onChange={handleTextChange} name='username'/><br/>
                <label className={ isActive ? "Active" : ""} htmlFor="email" >Email</label>
              </div>
              <div id="float-label">
                <input type={passwordShow? "text":"password" }value={user.password} onChange={handleTextChange}name='password'className='passwordInput'/>
                  {passwordShow?< FaEye onClick={showPassword} alt="show password icon" width='50' id= 'showpassword' height='50'/>:
                  < FaEyeSlash onClick={showPassword} alt="show password icon" width='50' id= 'showpassword' height='50'/>} 
                <label className={ isActive2 ? "Active" : ""} htmlFor="password" >Password</label>
              </div>
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