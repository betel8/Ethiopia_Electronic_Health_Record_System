import React from "react"
import Header from "../Header/Header";
import CONSTANT from "../Constant";
import './firstTime.css'
import image from '../image/firstTime.jpg'
import { useState } from "react";
import Warning from "../SharedComponents/warning";
import SingleInputContainer from "../SharedComponents/SingleInputContainer";

function FirstTimePasswordChange(props){
    const onSubmitHandler=(password)=>{
            fetch(CONSTANT.SERVER.URL+"changepassword",
                {
                    method: 'PUT',
                    headers: {
                    'Content-Type':'application/json',
                    'Authorization' : sessionStorage.getItem('jwt')
                    },
                    body:JSON.stringify(password)
                }).then(response=>{
                    if(response.ok){
                    }else{
                    }
                }).catch(er=>console.log(er));
    }
 
 
  const FirstTimeInput=[
  
  {
    'name':'newPassword',
    'type':'password',
    'required':true,
    'validationType':'name',
    'label':'New Password' ,  
 },
  
  {
    'name':'confirmNewPassword',
    'type':'password',
    'validationType':'password',
    'label':'Confirm New Password:',
    'required':true,
  }]
  
  const {handler,handleSubmit,intergratedValue}=Warning(FirstTimeInput,onSubmitHandler);  
    
    
    const FirstTimeValue=intergratedValue.map((value,index)=>(<SingleInputContainer name={value.name} type={value.type} handler={handler} 
        label={value.label} error={value.error} required={value.required} validationType={value.validationType} />));
    return(
        <div className="FirstTimeLoggedIn">
        <Header logout={props.logout} pageTitle={"Home"}/>
    
            <form onSubmit={handleSubmit}style={{display:"flex"}} className="firstTimeLoggedInForm">      
                <img src={image} className="logo" alt="change password big "/>
                <div className="main">
                  <h1>Change Password</h1>
                  <p>Your new password must be different from previous PIN code number</p>
                  {FirstTimeValue}                
                  <button id="buttons" type="submit">Change Password</button>
                </div>
            </form>

        
         
    </div>
    )
}
export default FirstTimePasswordChange;