import React from 'react'
import { useState } from 'react';
import logo from "../image/logo_with_s.png";
import './Login.css'
import Footer from '../Footer/Footer'

function Login(props){
  const [SERVER_URL,setServerUrl]=useState("http://localhost:8080/");
  const [Authorization,setAuth]=useState(false);
  const [user,setUser]=useState({username:'',password:''});
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  //change text 
  const handleTextChange=(event)=> {
    setUser({...user,
    [event.target.name]:event.target.value});

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
  const login=()=>{
    fetch(SERVER_URL + 'login', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(user)
      })
      .then(res => {
      const jwtToken = res.headers.get
      ('Authorization');
      if (jwtToken !== null) {
      sessionStorage.setItem("jwt", jwtToken);
      setAuth(true);
      }
      })
      .catch(err => console.error(err));
  }

if(Authorization){
  return(
    <div>allowed</div>
  );

}else{
  return(
    <section className='loginPage'>
          
          <section className='LoginCenter'>
          <div className='loginImgholder'><img src={logo} alt="company logo" width='130' id= 'img' height='50' /></div>
          <div className='loginContent'>
          <div id="float-label">
            <input type="text" value={user.username} onChange={handleTextChange} name='username'/><br/>
            <label className={ isActive ? "Active" : ""} htmlFor="email" >Email</label>
          </div>
          <div id="float-label">
            <input type="password" value={user.password} onChange={handleTextChange}name='password'/><br/>
            <label className={ isActive2 ? "Active" : ""} htmlFor="password" >Password</label>
          </div>
          <button id='button' onClick={login}>Login</button> 
          <div id='loginFootage'>
            <input type="checkbox" value="Remember me"/>Remember Me &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
            <a href='./login.js'>Forget password?</a>     
          </div></div>
          </section>
         
         
          <Footer pageTitle={"Login"} pageHandler={props.pageHandler}/>
    </section>
);

}
    }

    export default Login