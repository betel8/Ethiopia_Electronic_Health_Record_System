import React, { useState } from "react";
import './activity.css';
import SingleActivity from "./SingleActivity";
import { FaRedoAlt } from 'react-icons/fa';
import Loading from "../Loading/Loading"
function ActivityContainer(props) {
    const lists = { name: "tg", status: "New Doctor Added" };
    const [isLoading,setIsLoading]=useState(true);
    return (
        <div className="activityContainer">
            {isLoading&&<Loading/>}
            <div className="sub-header">
                <h4>Employee Activity Monitor</h4>
                {/*<div className="refreshBox">
                <FaRedoAlt  size={"0.8rem"} />
                <span style={{fontSize:"small"}}> Refresh</span>
    </div>*/}
            </div>
            <ul style={{display:"flex",position:"relative",padding:"0rem ",margin:0}}>
                <li style={{position:"relative",width:"10vw"}}>Name</li>
                <li style={{position:"relative",width:"15vw"}}>Email</li>
                <li style={{position:"relative",width:"10vw"}}>Phone</li>
                <li style={{position:"relative",width:"4vw"}}>Status</li>
                <li style={{position:"relative",width:"15vw"}}>Last Activity</li>
            </ul>
  
            <div className="activityBox" id="scroll-style">
                <SingleActivity name={"betel ameha"} email={"betel.ameha@gmail.com"} phone={"0911448314"} status={true} 
                activity={"checking"} activityTitle={"home"} />
            </div>
        </div>
    );
}
export default ActivityContainer;