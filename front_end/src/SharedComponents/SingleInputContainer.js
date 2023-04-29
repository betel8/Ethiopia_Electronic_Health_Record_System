import React from "react";
import {FaExclamationTriangle} from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { FaEyeSlash} from "react-icons/fa"
import { FaEye } from 'react-icons/fa';

function SingleInputContainer(props){
    const warningStyle={
      fontSize: 'small',
      color:'red',
      padding:0,
      margin:"0",
      position:"absolute",
      width:"fit-content"
      
    }
    const [labelFocus,setLabelFocus]= useState("Date"===props.type?"filled":props.to+"Label");
    const [passwordShow, setPasswordShow]=useState(false);
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
    if(props.type==="select"){
      const options=props.options.map(value=>(<option value={value}>{value}</option>))
      return(
      <div className="singleContainer">
          <select onChange={onChangeHandler} name={props.name} style={{height:"6vh" ,width:"90%"}}>
            {options}
          </select>
          <label htmlFor={props.name}className={labelFocus}>{props.label}</label>
          {props.error && (<p style={warningStyle}><FaExclamationTriangle/>{" "+props.label+props.error}</p>)}
      </div>);
    }else{
      return (
      <div className='singleContainer'>
        <input type={passwordShow?"text":props.type} className= {props.name+"Input"}  name={props.name} 
          onBlur={(e)=>props.handler(e,'onBlur')} onChange={onChangeHandler} 
          style={{
            width:"99%",
            height:"6vh"}}/>
        <label htmlFor={props.name}className={labelFocus}>{props.label}</label>
        {props.type==='email'&&<FaEnvelope style={{position:'absolute',top:"4vh",right:"1vw"}}/>}
        {props.type==='password'? passwordShow?
        < FaEye onClick={()=>{setPasswordShow(false)}} 
        style={{
          position:'absolute',
          top:"4vh",
          right:"1vw"
        }}/>: 
        < FaEyeSlash onClick={()=>setPasswordShow(true)} 
        style={{
          position:'absolute',
          top:"4vh",
          right:"1vw"
        }}/>:
        ""}
        {props.error && (<p style={warningStyle}><FaExclamationTriangle style={{margin:0,padding:0,width:"0.9vw"}}/>{" "+props.label+props.error}</p>)}
     
      {props.password}
    
      </div>)
    }
    /*
    if(props.type==="textarea"){
        return(
          <div className='singleContainer' >
            { (props.label==='History:') ?  
            <textarea cols="40" rows="8" onChange={onChangeHandler} name={props.name} ></textarea>
          
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
}*/

}
export default SingleInputContainer;