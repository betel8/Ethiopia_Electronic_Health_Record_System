import React from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
function OneActivity (props){
    return(
        <div className="SingleActivityContainer"style={{display:"block"}}>
        <hr color="#D3D3D3" style={{margin:"0"}}/>
        <ul className="singleActivity" style={{display:"flex",margin:"0" ,padding:"0.5vh 0",backgroundColor:"white"}}>
            <li style={{width:"10vw" ,fontSize:"medium",fontWeight:"bold"}}>{props.name}</li>
            <li style={{width:"15vw",fontSize:"medium"}}>{props.email}</li>
            <li style={{width:"10vw",fontSize:"medium"}}>{props.phone}</li>
            <li style={{width:"4vw" ,fontSize:"medium"}}>{props.status? <GrStatusGoodSmall color="green" size={"0.8rem"} style={{marginLeft:"1vw"}}/>
            :<GrStatusGoodSmall color="gray" size={"0.8rem"} style={{marginLeft:"1vw"}}/>}</li>
            <li style={{width:"20vw"}}>
                <ul style={{margin:0,padding:0}}>
                    <li style={{fontSize:"small"}}>{props.activity}</li>
                    <li style={{fontSize:"smaller",fontWeight:"bold",position:"relative"}}>{props.activityTitle}
                    <span style={{right:"1vw" ,position:"absolute",fontWeight:"lighter",fontStyle:"italic"}}>{props.time}</span></li>
                </ul>
            </li>      
        </ul>
        </div>
    );
}
export default OneActivity