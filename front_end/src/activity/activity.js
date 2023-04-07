import React, { useState } from "react";
import './activity.css'
import OneActivity from "./oneActivity";

import { FaRedoAlt } from 'react-icons/fa'
function Activity(props) {
    const lists = { name: "tg", status: "New Doctor Added" };


    return (
        <div className="container">
            <div className="titles">

                <h2>Admin Activity</h2>
         
            </div>
            <FaRedoAlt className="refresh" />
  
            <div className="scroll" id="scroll-style">

                <OneActivity list={lists} />




            </div>
             {/* <button>Refresh</button> */}
        </div>
    );
}
export default Activity