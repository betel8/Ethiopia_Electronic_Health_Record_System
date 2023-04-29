import React from "react"
import Header from "../Header/Header";
import CONSTANT from "../Constant";
import './firstTime.css'
import image from '../image/firstTime.jpg'
import { useState } from "react";
import Warning from "../SharedComponents/warning";
import SingleInputContainer from "../SharedComponents/SingleInputContainer";

function FirstTimePasswordChange(props){

     const[newPassword,setNewPassword]=useState("")
    const [isConfirmed,setIsConfirmed]=useState("true");
    const [password,setPassword]=useState("changed")
    const onSubmitHandler=(e)=>{
        if (isConfirmed){
            const temp={
                "ID":sessionStorage.getItem("ID"),
                "password":password
            }
            fetch(CONSTANT.SERVER.URL+"changepassword",
                {
                    method: 'PUT',
                    headers: {
                    'Content-Type':'application/json',
                    'Authorization' : sessionStorage.getItem('jwt')
                    },
                    body:JSON.stringify(temp)
                }).then(response=>{
                    if(response.ok){
                    }else{
                        e.preventDefault();
                    }
                }).catch(er=>console.log(er));

        }
    }
    const onChangeHandler=(e)=>{
        
    }
    const onBlurHandler=(e)=>{
        setPassword(e.target.value);
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
  
  const {handler,handleSubmit}=Warning(FirstTimeInput,"FirstTime");  
    
    
    const FirstTimeValue=FirstTimeInput.map((value,index)=>{

    return(<SingleInputContainer name={value.name} type={value.type} handler={handler} onchange={onchange} 
        label={value.label} error={value.error} required={value.required} validationType={value.validationType} />);
      })
    return(
        <div className="FirstTimeLoggedIn">
        <Header logout={props.logout} pageTitle={"Home"}/>
    
        <form onSubmit={handleSubmit}style={{display:"flex"}} className="firstTimeLoggedInForm">
                  
              <img src={image} className="logo" alt="change password big "/>
                <div className="main">
                <h1>Change Password</h1>
                <p>Your new password must be different from previous PIN code number</p>
           
        
                {FirstTimeValue[0]}
          
              {FirstTimeValue[1]}
            
                
                <button id="buttons" type="submit">Change Password</button>
                </div>
            </form>

        
         
    </div>
    )
}
export default FirstTimePasswordChange;