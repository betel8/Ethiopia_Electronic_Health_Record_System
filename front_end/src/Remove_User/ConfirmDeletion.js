import React from "react";
import './confirm.css'


import {RiDeleteBin6Line} from 'react-icons/ri'
function ConfirmDeletion(props){

    return(
        <div className="container">
<div className="message">
<RiDeleteBin6Line className="icon"/>
<h2>You are about to suspend doctor</h2>
<h4>This will suspend this user from the system</h4>
<h4>Are you sure?</h4>
<input type="button" id="cancel" value="Cancel"/>

<input type="button" id="confirm" style={{
   backgroundColor: "red"  , marginLeft:"6vw",boxShadow: "0 0.5vh 0.5vw rgba(240, 7, 7, 0.338)"
}} value="Suspend"/>

</div>
    </div>);
}
export default ConfirmDeletion