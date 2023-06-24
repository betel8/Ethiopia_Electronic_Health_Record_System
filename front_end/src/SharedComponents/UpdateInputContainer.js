import React, { useState } from "react";
import {MdOutlineCancel} from "react-icons/md"
import { GoRequestChanges } from "react-icons/go";
import { FaEnvelope ,FaExclamationTriangle } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";



function UpdateInputContainer(props){
    const [isDisabled,setIsDisabled]=useState(true);  
    const warningStyle={
        fontSize: 'small',
        color:'red',
        padding:0,
        margin:"0",
        position:"absolute",
        width:"fit-content"
        
      }
    const onChangeHandler=(e)=>{
        props.handler(e,'onChange');
    }
    if(props.type==="select"){
      const options=props.options.map(value=>{
        if(props.value===value){
          return(<option value={value} selected>{value}</option>)
        }else{
          return(<option value={value} >{value}</option>)
        }
      })
      return(
      <div style={{display:"flex",paddingTop:"1.5vh",position:"relative"}}>
          <select onChange={onChangeHandler} disabled={isDisabled} style={{height:"4.5vh",width:"8vw"}}name={props.name} className="updateInput">
            {options}
          </select>
          <label htmlFor={props.name}className={"updateValue"} style={{top:"-3.2vh"}}>{props.label}</label>
          {isDisabled?<span style={{width:"1.5vw",margin:"1vh 0.2vw",height:"3vh",backgroundColor:"#0067b8",
              display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}}>
                <MdModeEdit onClick={()=>setIsDisabled(false)} color="white"/></span>:
                      <div style={{display:"flex"}}> 
                          <GoRequestChanges className="buttonIcons" color="#0067b8"  
                            onClick={()=>{props.submit();setIsDisabled(true);}}/>
                          <MdOutlineCancel className="buttonIcons " color="red" 
                              onClick={()=>{setIsDisabled(true);props.close()}}/>
                      </div>}
          {props.error && (<p style={warningStyle}><FaExclamationTriangle/>{" "+props.label+props.error}</p>)}
      </div>);
    }else{
      return(
        <div style={{display:"flex",paddingTop:"1.5vh"}}>
           <div style={{display:"flex"}}>
            <div style={{position:"relative"}}>
              <input type={"text"} className= "updateInput"  name={props.name} 
                        onBlur={(e)=>props.handler(e,'onBlur')} onChange={onChangeHandler} value={props.value} disabled={isDisabled}/>
              {props.type==='email'&&<FaEnvelope style={{position:'absolute',top:"1.5vh",right:"1vw"}} />}
              <label htmlFor={props.name}className={"updateValue"}>{props.label}</label>
        {props.error && (<p style={warningStyle}>
          <FaExclamationTriangle style={{margin:0,padding:0,width:"0.9vw"}}/>{" "+props.label+props.error}</p>)}
            </div>
            {isDisabled?<span style={{width:"1.8vw",margin:"1vh 0.2vw",height:"3vh",backgroundColor:"#0067b8",
              display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}}>
                <MdModeEdit onClick={()=>setIsDisabled(false)} color="white"/></span>:
                      <div style={{display:"flex",alignItems:"center"}}> 
                          <GoRequestChanges className="buttonIcons" color="#0067b8"  
                            onClick={()=>{props.submit();setIsDisabled(true);}}/>
                          <MdOutlineCancel className="buttonIcons " color="red" 
                              onClick={()=>{setIsDisabled(true);props.close()}}/>
                      </div>}
            </div> 

        </div>
        
    )
    }
    
}
export default UpdateInputContainer;