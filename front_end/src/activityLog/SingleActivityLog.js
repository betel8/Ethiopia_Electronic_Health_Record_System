import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import {BsHospital} from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineBlock } from "react-icons/md";
import { FaUserInjured, FaUsers} from "react-icons/fa";

function SingleActivityLog(props){
        let icon;
    if(props.subject==="New Doctor Added"||props.subject==="New Nurse Added"||props.subject==="New Admin Added"||
    props.subject==="New Pharmacist Added")
        icon=<AiOutlineUserAdd className="iconAdd"/>
    else if(props.subject==="Password")
        icon=<RiLockPasswordLine className="iconPassword"/>
    else if(props.subject==="New HCP Added")
        icon=<BsHospital className="iconPassword"/>
    else if(props.subject==="Suspend a User ")
        icon=<MdOutlineBlock className="iconSuspend"/>
    else if(props.subject==="New Patient Registered"||props.subject==="Patient Admitted"){
        icon=<FaUserInjured className="iconSuspend" style={{color:"white",backgroundColor:"#528ccc"}}/>
    }else if(props.subject==="New Employee Hired"||props.subject==="Employee Get fired"){
        icon=<FaUsers className="iconSuspend" style={{color:"white",backgroundColor:"#A52A2A"}}/>
    }
    else
        icon=<MdOutlineManageAccounts className="icon"/>
    return(
        <div className="singleActivity">
            <div className="iconContainer">

                {icon}
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