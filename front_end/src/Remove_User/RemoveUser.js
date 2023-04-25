import React from "react";
import './removeUser.css';
import { GrFormClose } from "react-icons/gr";

import {AiOutlineSearch} from 'react-icons/ai'
import DoctorList from "./DoctorList";
function RemoveUser(props){
    const lists = { name: "Tigist Yegezu", userType: "Doctor" };

    return(
        <section className="RemoveUser">
            <div className='add_user_Title'>
            <h2>Remove Doctor</h2>
            <div className='addDoctorClose' onClick={()=>{props.close(false,"home")}}>
            <GrFormClose size={30}/>
        </div></div>
        <h3>Enter Name or Id you want to suspend</h3>
        <div className='searchContainer' style={{
   margin:"2vw 1vw 1vw 15.5vw"}} >
      <input type='search' placeholder='Search' className='headerSearchInput' />
      <div className='searchIcon'>
      <AiOutlineSearch style={{color:'#0067b8',background:'transparent' ,height:'2.2rem',width:'2.2rem',borderTopRightRadius:'0.5rem',
         borderBottomRightRadius:'0.5rem'}}/>
     </div>
    
<div className="list">
<div className="scrolls" id="scrolls-style"style={{ backgroundColor: "rgba(238, 235, 235, 0.651)"
}} >
    
 <DoctorList list={lists}/>
 <DoctorList list={lists}/> </div>
 </div>
    
    </div>
     <div className="listTitle">
<label>Full Name</label>
<label>Role</label>
</div> 
        </section>
    )
}
export default RemoveUser;