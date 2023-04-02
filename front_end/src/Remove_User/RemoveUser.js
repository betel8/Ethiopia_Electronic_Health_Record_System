import React from "react";
import './removeUser.css';
import { GrFormClose } from "react-icons/gr";
function RemoveUser(props){
    return(
        <section className="RemoveUser">
            <div className='remove_user_Title'>
            
            <div className='addDoctorClose' onClick={()=>{props.close(false,"home")}}>
            <GrFormClose size={30}/>
        </div></div>
        
        </section>
    )
}
export default RemoveUser;