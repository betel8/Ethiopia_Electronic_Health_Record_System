import React from "react";
import { RiAdminFill, RiNurseFill } from "react-icons/ri";
function SingleSearch (props){
    return(
        <div className="singleSearch"  style={{display:"block"}}>
         <ul>
        <li style={{fontSize:"small",float:'left'}}>Tg yegezu  {<RiAdminFill style={{marginLeft:'1vw'}}/>}</li>
         </ul>
         
         {/* <RiNurseFill  style={{color:'blue'}}/> */}
        </div>
    );
}
export default SingleSearch