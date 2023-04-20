import React, { useState } from "react";
import './activity.css'
import SingleActivity from "./SingleActivity";

import { FaRedoAlt } from 'react-icons/fa'
function ActivityContainer(props) {
    const lists = { name: "tg", status: "New Doctor Added" };
    return (
        <div className="activityContainer">
            <div className="sub-header">

                <h4>Employee Activity Monitor</h4>
                <div className="refreshBox">
                <FaRedoAlt  size={"0.8rem"} />
                <span style={{fontSize:"small"}}> Refresh</span>
                </div>
            </div>
            <div style={{display:"flex",position:"relative",padding:"0rem 1rem"}}>
                <span style={{position:"relative"}}>Name</span>
                <span style={{position:"relative",marginLeft:"5rem"}}>Email</span>
                <span style={{position:"relative",marginLeft:"5rem"}}>Phone</span>
                <span style={{position:"relative",marginLeft:"5rem"}}>Status</span>
                <span style={{position:"relative",marginLeft:"5rem"}}>Last Activity</span>
            </div>
  
            <div className="activityBox" id="scroll-style">
                <SingleActivity/>
            </div>
        </div>
    );
}
export default ActivityContainer;