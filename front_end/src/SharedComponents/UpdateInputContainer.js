import React, { useState } from "react";
import {MdOutlineCancel} from "react-icons/md"
import { AiFillEdit } from "react-icons/ai";
import { GoRequestChanges } from "react-icons/go";

function UpdateInputContainer(props){
    const [isDisabled,setIsDisabled]=useState(true)
    return(
        <div className="UpdateInputContainer">
            <input type={props.type} name={props.name} disabled={isDisabled} value={props.value} onChange={
                (e)=>props.change({personalDetail:{[props.name]:e.target.value}})}/>
            {isDisabled?<AiFillEdit onClick={()=>setIsDisabled(false)}/>:
                <div style={{display:"flex"}}> 
                    <GoRequestChanges className="buttonIcons"/>
                    <MdOutlineCancel className="buttonIcons "color="red" onClick={()=>{setIsDisabled(true); props.close()}}/>
                    
                </div>} 
        </div>
    )
}
export default UpdateInputContainer;