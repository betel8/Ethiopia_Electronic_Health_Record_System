import React from "react";

import './removeUser.css';
import { GrSubtractCircle  } from "react-icons/gr";
function DoctorList(props){
    return( 
<div>
 < div className="singleActivityContainer"style={{display:"flex", height:"8vh",justifyContent:"center",flexDirection:"column"}}>
        <ul className="singleActivity" style={{justifyContent:'normal'}}>
            <li style={{ width:"10vw" ,fontSize:"medium",fontWeight:"bold"}}>{props.list.name}</li>
            <li style={{width:"15vw",marginLeft:'8vw',fontSize:"medium"}}>{props.list.userType}</li>
            <li><GrSubtractCircle className="deleteIcon" /></li>
        
           </ul>


</div>
 </div>
    );
}
export default DoctorList