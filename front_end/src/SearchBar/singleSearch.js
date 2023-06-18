import React from "react";
import { RiAdminFill, RiNurseFill } from "react-icons/ri";
import "./searchBar"
function SingleSearch (props){
    return(
        <div className="singleSearchValue" >
                <RiAdminFill style={{width:"2vw"}} size={"1rem"}/>
                <h5 style={{padding:0,margin:0}}>{props.fname+" "+props.lname}</h5>
        </div>
    );
}
export default SingleSearch