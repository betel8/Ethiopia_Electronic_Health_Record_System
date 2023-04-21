import React from "react";
import {FaExclamationTriangle} from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";
import './addUser.css'
import { useState } from "react";

function SingleInputContainer(props){
    const [labelFocus,setLabelFocus]= useState("Date"===props.type?"filled":props.to+"Label");
    
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
        else if(props.type!=="select"){
    return(
        <div className='singleContainer'>
        <input type={props.type} className= {props.name+"Input"}  name={props.name} 
            onBlur={(e)=>props.handler(e,'onBlur')} onChange={onChangeHandler} />
        <label htmlFor={props.name}className={labelFocus}>{props.label}</label>
        {props.name==='email'&&<FaEnvelope style={{position:'absolute',top:"3.5vh",right:"1vw"}}/>}
        {props.error && (<p className="warning"><FaExclamationTriangle/>{props.label+props.error}</p>)}
      
        </div>
    );
}
else{
    return(
        <div className='singleContainer'>
           {  (props.label==="Gender:" )?
            
        <select onChange={onChangeHandler} name={props.name}>
            <option></option>
            <option>Male</option>
            <option>Female</option>
        </select >
         :(props.label=="Peripheries:")?
         <select  onChange={onChangeHandler} name={props.name}>
         <option></option>
         <option>Cold</option>
         
         <option>Warm</option>
         <option>Cynosed</option>
     </select>
      :(props.label=="GCS:")?
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