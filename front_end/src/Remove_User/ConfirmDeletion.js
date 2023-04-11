import React from "react";
import './confirm.css'


import {RiDeleteBin6Line} from 'react-icons/ri'
function ConfirmDeletion(){

    return(<div className="container">
<div className="message">
<RiDeleteBin6Line className="icon"/>
<h2>You are about to suspend doctor</h2>
<h4>This will suspend this user from the system</h4>
<h4>Are you sure?</h4>
<input type="button" id="cancel" value="Cancel"/>

<input type="button" id="delete" value="Suspend"/>

</div>
    </div>);
}
export default ConfirmDeletion