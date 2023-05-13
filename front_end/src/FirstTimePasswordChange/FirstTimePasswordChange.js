import React from "react"
import CONSTANT from "../Constant";
import './firstTime.css'
import image from '../image/firstTime.jpg'
import Warning from "../SharedComponents/warning";
import Header from "../Header/Header";
import SingleInputContainer from "../SharedComponents/SingleInputContainer";

function FirstTimePasswordChange(props){
  
  const onSubmitHandler=(password)=>{
          fetch(CONSTANT.SERVER.URL+"first/time/change/password",
              {
                  method: 'PUT',
                  headers: {
                  'Content-Type':'application/json',
                  'Authorization' : sessionStorage.getItem('jwt')
                  },
                  body:JSON.stringify(password)
              }).then(response=>{
                  if(response.ok){
                    window.location.reload();
                  }else{
                  }
              }).catch(er=>console.log(er));
  }
  const {handler,handleSubmit,intergratedValue}=Warning(CONSTANT.FirstTimePasswordChangeInput,onSubmitHandler);  
  const FirstTimeValue=intergratedValue.map((value,index)=>(<SingleInputContainer name={value.name} type={value.type} handler={handler} 
      label={value.label} error={value.error} required={value.required} validationType={value.validationType} />));
    return(
        <div className="FirstTimeLoggedIn">
            <Header pageTitle={"FirstTimeLoggedIn"}/>
            <form onSubmit={handleSubmit}style={{display:"flex"}} className="firstTimeLoggedInForm">      
                <img src={image} className="logo" alt="change password big "/>
                <div className="main">
                  <h1>Change Password</h1>
                  <p>Your new password must be different from previous PIN code number</p>
                  {FirstTimeValue}                
                  <button type="submit">Change Password</button>
                </div>
            </form>

        
         
    </div>
    )
}
export default FirstTimePasswordChange;