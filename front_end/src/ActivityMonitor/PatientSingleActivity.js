import React, { useEffect, useState } from "react";
import CONSTANT from "../Constant";
import { GrStatusGoodSmall } from "react-icons/gr";
function PatientSingleActivity (props){
        const[status,setStatus]=useState(false);
 
        return(
            < div className="singleActivityContainer"style={{display:"flex", height:"7vh",justifyContent:"center",flexDirection:"column"}}>
                <ul className="singleActivity">
                    <li style={{width:"20vw" ,fontSize:"medium",fontWeight:"bold"}}>{props.name}</li>
                    <li style={{width:"15vw",fontSize:"medium"}}>{props.contact}</li>
                    <li style={{width:"10vw",fontSize:"medium"}}>{props.gender}</li>
                    <li style={{width:"10vw" ,fontSize:"medium"}}><button disabled={status} 
                        className="diagnosisButton" onClick={()=>{setStatus(!status)}}>Diagnosis</button></li>
                    <li style={{width:"10vw"}}>
                        {props.age}
                    </li>      
                </ul>
            </div>
        );
    }
export default PatientSingleActivity