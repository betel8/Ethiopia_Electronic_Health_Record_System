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
                <input type={passwordShow?"text":props.type} className= {props.name+"Input"}  name={props.name} 
                        onBlur={(e)=>props.handler(e,'onBlur')} onChange={onChangeHandler} value={IValue} disabled={isDisabled}/>
                                {isDisabled?<AiFillEdit onClick={()=>setIsDisabled(false)}/>:
                                    <div style={{display:"flex"}}> 
                                        <GoRequestChanges className="buttonIcons" onClick={()=>{props.submit();setIsDisabled(true);props.close()}}/>
                                        <MdOutlineCancel className="buttonIcons "color="red" 
                                            onClick={()=>{setIsDisabled(true); props.close()}}/>
                                    </div>}
            </div> 
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
    
     
        </div>
        
    )
}
export default UpdateInputContainer;