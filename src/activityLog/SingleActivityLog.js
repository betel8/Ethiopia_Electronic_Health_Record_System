import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function SingleActivityLog(props){
    return(
        <div className="singleActivity">
            <div className="iconContainer">
                <RiDeleteBin6Line className="icon"/>
                <div style={{display:"flex" ,justifyContent:"center" ,height:"100%"}}>
                    <hr className="middleHrs"/>
                </div>
            </div>
            <div className="activityDetailContainer" >
                <h5>{props.subject}</h5>
                <p>{props.description}</p>
                <span>{props.time}</span>
            </div>    
        </div>
    );
}
export default SingleActivityLog;