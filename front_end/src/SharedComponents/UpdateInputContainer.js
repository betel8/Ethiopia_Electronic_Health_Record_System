import React, { useState } from "react";
import {MdOutlineCancel} from "react-icons/md"
import { AiFillEdit } from "react-icons/ai";
import { GoRequestChanges } from "react-icons/go";
import { FaEnvelope ,FaEye, FaEyeSlash,FaExclamationTriangle } from "react-icons/fa";



function UpdateInputContainer(props){
    const [isDisabled,setIsDisabled]=useState(true)
    const [IValue,setIValue]=useState(props.value);
    const warningStyle={
        fontSize: 'small',
        color:'red',
        padding:0,
        margin:"0",
        position:"absolute",
        width:"fit-content"
        
      }
      const [passwordShow, setPasswordShow]=useState(false);
      const onChangeHandler=(e)=>{
          props.handler(e,'onChange');
          setIValue(e.target.value)
 
      }
    return(
        <div className="SingleUpdateContainer">
           <div style={{display:"flex"}}>
            <div style={{position:"relative"}}>
              <input type={passwordShow?"text":props.type} className= {props.name+"Input"}  name={props.name} 
                        onBlur={(e)=>props.handler(e,'onBlur')} onChange={onChangeHandler} value={IValue} disabled={isDisabled}/>
              {props.type==='email'&&<FaEnvelope style={{position:'absolute',top:"0.5vh",right:"1vw"}}/>}
             
        {props.error && (<p style={warningStyle}>
          <FaExclamationTriangle style={{margin:0,padding:0,width:"0.9vw"}}/>{" "+props.label+props.error}</p>)}
            </div>
                  {isDisabled?<AiFillEdit className="buttonIcons"onClick={()=>setIsDisabled(false)}/>:
                      <div style={{display:"flex"}}> 
                          <GoRequestChanges className="buttonIcons" color="#0067b8"  
                            onClick={()=>{props.submit();setIsDisabled(true);props.close(true)}}/>
                          <MdOutlineCancel className="buttonIcons " color="red" 
                              onClick={()=>{setIsDisabled(true); props.close(true)}}/>
                      </div>}
            </div> 
        
        {props.error && (<p style={warningStyle}><FaExclamationTriangle style={{margin:0,padding:0,width:"0.9vw"}}/>{" "+props.label+props.error}</p>)}

    
     
        </div>
        
    )
}
export default UpdateInputContainer;