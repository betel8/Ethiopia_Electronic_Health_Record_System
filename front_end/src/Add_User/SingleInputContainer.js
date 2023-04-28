import React from "react";
import {FaExclamationTriangle} from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";
import './addUser.css'
import { useState } from "react";

import { FaEyeSlash} from "react-icons/fa"
import { FaEye } from 'react-icons/fa';

function SingleInputContainer(props){
    const [labelFocus,setLabelFocus]= useState("Date"===props.type?"filled":props.to+"Label");
    const [user,setUser]=useState({newPassword:'',confirmNewPassword:''});
   
    const [passwordShow, setPasswordShow]=useState(false);
    const [confirmPasswordShow, setconfirmPasswordShow]=useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
  
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
    const onChangeHandler=(e)=>{
        props.handler(e,'onChange');
        if(props.type!=="Date"){
            if(!e.target.value){
                setLabelFocus(props.to+"Label");
            }else{
                setLabelFocus("filled");
            }
        }else{
            setLabelFocus("filled");
        }
        
    }
    if(props.type==="textarea"){
        return(
         
        <div className='singleContainer' >
         
            { (props.label==='History:') ?  <textarea cols="40" rows="8" onChange={onChangeHandler} name={props.name} ></textarea>
          
            :<textarea cols="40" rows="3" onChange={onChangeHandler} name={props.name}></textarea>
        }
          <label htmlFor={props.name}className={labelFocus}>{props.label}</label>
   
      </div> );}
      else if(props.type==="table"){
        return(
            <div className='singleContainer'>
                <div className="App" >
           <table style={{ border:" 0.1vh solid black"
}}>
        <tr>
          <th>Drug Name</th>
          <th>Strength</th>
          <th>dosage form</th>
          <th>Dose</th>
          <th>frequency</th>
          <th>duration </th>
          <th>quantity</th>
        </tr>
        <tr>
            <td>tg</td>
            <td>tg</td>
            
        </tr>
        </table>
           </div> </div>
        );
      }

else if(props.type=="password"){
      return(
        <div>
        { (props.label=="New Password")?   
        <div id="float-label">
    <input type={passwordShow? "text":"password" } value={user.newPassword}
              onChange={handleTextChange} name={props.name} className='newPassword'/>
                  {passwordShow?< FaEye onClick={showPassword} alt="show password icon" width='50' id= 'showpassword' height='50'/>:
                  < FaEyeSlash onClick={showPassword} alt="show password icon" width='50' id= 'showpassword' height='50'/>} 
             <label  className={ isActive ? "Active" : ""}  htmlFor="newPassword">{props.label}</label>
              </div>
              :
              <div id="float-label">
               <input type={confirmPasswordShow? "text":"password" }value={user.confirmNewPassword}
            onChange={handleTextChange} name={props.name} className='confirmNewPassword'/>
                  {confirmPasswordShow?< FaEye onClick={confirmPassword} alt="show password icon" width='50' id= 'showpassword' height='50'/>:
                  < FaEyeSlash onClick={confirmPassword} alt="show password icon" width='50' id= 'showpassword' height='50'/>} 
               
            <label className={ isActive2 ? "Active" : ""}  htmlFor="confirmNewPassword">{props.label}</label> 
            </div>}
              </div> );
}    
        else if(props.type!=="select"){
    return(
        <div className='singleContainer'>
        <input type={props.type} className= {props.name+"Input"}  name={props.name} 
            onBlur={(e)=>props.handler(e,'onBlur')} onChange={onChangeHandler} />
        <label htmlFor={props.name}className={labelFocus}>{props.label}</label>
        {props.name==='email'&&<FaEnvelope style={{position:'absolute',top:"3.5vh",right:"1vw"}}/>}
        {props.error && (<p className="warning"><FaExclamationTriangle/>{props.label+props.error}</p>)}
       
        {props.password}
      
        </div>
    );
}
else{
    return(
        <div className='singleContainer'>
           {  (props.label==="Gender" )?
            
        <select onChange={onChangeHandler} name={props.name}>
            <option></option>
            <option>Male</option>
            <option>Female</option>
        </select >
         :(props.label==="Peripheries:")?
         <select  onChange={onChangeHandler} name={props.name}>
         <option></option>
         <option>Cold</option>
         
         <option>Warm</option>
         <option>Cynosed</option>
     </select>
      :(props.label==="GCS:")?
      <select  onChange={onChangeHandler} name={props.name}>
      <option></option>
      <option>E</option>
      
      <option>M</option>
      <option>V</option>
  </select>
        :
         <select  id="LargeSelect" onChange={onChangeHandler} name={props.name}>
         <option></option>
         <option>Moles</option>
         
         <option>naevus</option>
         <option>Defomities</option>
     </select>
        }
        <label htmlFor={props.name}className={labelFocus}>{props.label}</label>
        {props.error && (<p className="warning"><FaExclamationTriangle/>{props.label+props.error}</p>)}
        </div>
    );
}

}
export default SingleInputContainer;