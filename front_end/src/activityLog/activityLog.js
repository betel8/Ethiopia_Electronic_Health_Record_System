import React from "react";
import {RiDeleteBin6Line} from 'react-icons/ri'
import './activityLog.css'
function ActivityLog(){
    return(
        <div className="container">
<div className="titles">

    <h2>Activity Log</h2></div> 
    <div className="scrolls" id="scrolls-style">

<hr className="middleHrs"/>
<RiDeleteBin6Line className="icons"/>
<div className="oneActivity">
  
<h4> 10:00 </h4>

<p>New Doctor Added</p>
<h1>.</h1>
</div>

<hr className="middleHrs"/>
<RiDeleteBin6Line className="icons"/>
<div className="oneActivity">
    
<h4> 10:00 </h4>
<p>New Doctor Added</p>
</div>

<hr className="middleHrs"/>
<RiDeleteBin6Line className="icons"/>
<div className="oneActivity">
    
<h4> 10:00 </h4>
<p>New Doctor Added</p>
</div>
    </div>
  </div>
    );
}
export default ActivityLog