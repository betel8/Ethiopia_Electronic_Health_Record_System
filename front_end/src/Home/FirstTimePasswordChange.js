import React from "react"
import Header from "../Header/Header";
import CONSTANT from "../Constant";
import './firstTime.css'
import image from '../image/forget.jpg'
import { useState } from "react";
//import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { FaEyeSlash} from "react-icons/fa"
import { FaEye } from 'react-icons/fa';
function FirstTimePasswordChange(props){

    const [passwordShow, setPasswordShow]=useState(false);
    const [confirmPasswordShow, setconfirmPasswordShow]=useState(false);
    const [user,setUser]=useState({newPassword:'',confirmNewPassword:''});
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
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
                        alert("okey")
                    }else{
                        alert("notokeu")
                    }
                }).catch(er=>console.log(er));

        }
    }
    const onChangeHandler=(e)=>{
        
    }
    const onBlurHandler=(e)=>{
        setPassword(e.target.value);
    }
    
 //showPassword
 const showPassword =()=>{
  setPasswordShow(!passwordShow);
}
const confirmPassword =()=>{
  setconfirmPasswordShow(!confirmPasswordShow);
}
    //change text 
  const handleTextChange=(event)=> {
    setUser({...user,[event.target.name]:event.target.value});
    if(event.target.name==='newPassword'){
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

    return(
        <div className="FirstTimeLoggedIn">
        {/* <Header logout={props.logout} pageTitle={"Home"}/> */}
        <section>
        <form  className="firstTimeLoggedInForm">
              <img src={image} className="logo" alt="change password big "/>
                <div className="main">
                <h1>Change Password</h1>
                <p>Your new password must be different from previous PIN code number</p>
             <div id="float-label" >
             <input type={passwordShow? "text":"password" }value={user.newPassword} onBlur={onBlurHandler} 
              onChange={handleTextChange} name='newPassword'className='newPassword'/>
                  {passwordShow?< FaEye onClick={showPassword} alt="show password icon" width='50' id= 'showpassword' height='50'/>:
                  < FaEyeSlash onClick={showPassword} alt="show password icon" width='50' id= 'showpassword' height='50'/>} 
              
              <label  className={ isActive ? "Active" : ""}  htmlFor="newPassword">New Password</label>
               
             </div>
              
             <div id="float-label">
             <input type={confirmPasswordShow? "text":"confirmPassword" }value={user.confirmPassword}
              onBlur={onBlurHandler}  onChange={handleTextChange} name='confirmNewPassword'className='confirmNewPassword'/>
                  {confirmPasswordShow?< FaEye onClick={confirmPassword} alt="show password icon" width='50' id= 'showpassword' height='50'/>:
                  < FaEyeSlash onClick={confirmPassword} alt="show password icon" width='50' id= 'showpassword' height='50'/>} 
               
            <label className={ isActive2 ? "Active" : ""}  htmlFor="confirmNewPassword">Confirm new password</label>
                </div>
                
                
                <button id="buttons" type="submit">Change Password</button>
                </div>
            </form>

        
        </section>
         
    </div>
    )
}
export default FirstTimePasswordChange;