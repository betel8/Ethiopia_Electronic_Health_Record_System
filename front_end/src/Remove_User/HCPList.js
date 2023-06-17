import React from "react";

import './removeUser.css';
import { GrSubtractCircle  } from "react-icons/gr";
function HCPList(props){
    return( 
        <div>
            <ul style={{listStyle:"none",display:"flex",margin:0,padding:"1vh 0",position:"relative",borderBottom:"solid 0.1vh grey"}}>
                <li style={{width:"15vw",position:"relative",fontSize:"medium"}}>{props.cName}</li>
                <li style={{width:"15vw" ,fontSize:"medium",position:"relative"}}>{props.owner}</li>
                <li style={{width:"10vw",fontSize:"medium",position:"relative"}}>{props.phone}</li>
                <li><GrSubtractCircle className="deleteIcon" color="red" onClick={()=>props.onClickHandler(props.email)}/></li>
            
            </ul>
        </div>
    );
}
export default HCPList