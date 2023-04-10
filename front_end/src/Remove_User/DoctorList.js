import React from "react";

import './removeUser.css';
import {RiDeleteBin6Line} from 'react-icons/ri'
function DoctorList(props){
    return(
<div>
    
<div className="onepersons">
<h4> {props.list.name}</h4>
<span>{props.list.userType}</span>

<RiDeleteBin6Line className="deleteIcon"/>

</div>
 </div>
    );
}
export default DoctorList