
import SingleUser from "./UpdateUser";
import CONSTANT from "../Constant";
import { useEffect } from "react";

function Update(props){
   
        return(
            <div className="mainContainer" id="scrolls-style">
                <div className="sub-header">
                    <h4>Update User</h4>
                </div> 
                <div  >
                <SingleUser user={props.user} />
                
                </div>
            </div>
            );
  
}
export default Update