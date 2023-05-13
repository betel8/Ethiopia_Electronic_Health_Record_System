import React from "react";
import './removeUser.css';
import { GrFormClose } from "react-icons/gr";

import {AiOutlineSearch} from 'react-icons/ai'
import DoctorList from "./DoctorList";
import Search from "../SearchBar/searchBar";
function RemoveUser(props){
    const lists = { name: "Tigist Yegezu", userType: "Doctor" };

    return(
        <section  className="RemoveUser">
            <div className='add_user_Title'>
            <h2>Suspend Doctor</h2>
            < div className='addDoctorClose' onClick={()=>{props.close(false,"home")}}>
            <GrFormClose size={30}/>
        </div></div>
        <h3>Enter UserName or Id you want to suspend</h3>
        <div className='searchButton'>
             <Search  />
        </div>
       
        <div  className="list">
            <ul style={{display:"flex",position:"relative",padding:"0rem ", margin:0}}>
                <li style={{position:"relative",width:"10vw"}}>Name</li>
                <li style={{position:"relative",marginLeft:'5.5vw',width:"10vw"}}>Status</li>
            </ul>
  
            <div className="activityBox">
             <DoctorList list={lists}/>
              
             <DoctorList list={lists}/>
            </div>
            </div>
    
        </section>
    )
}
export default RemoveUser;