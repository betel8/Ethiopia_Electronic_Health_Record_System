import React from "react";
import './removeUser.css';
import { GrFormClose } from "react-icons/gr";

import {AiOutlineSearch} from 'react-icons/ai'
import DoctorList from "./DoctorList";
function RemoveUser(props){
    const lists = { name: "Tigist Yegezu", userType: "Doctor" };

    return(
        <section className="RemoveUser">
            <div className='remove_user_Title'>
            <h2>Remove Doctor</h2>
            <div className='addDoctorClose' onClick={()=>{props.close(false,"home")}}>
            <GrFormClose size={30}/>
        </div></div>
<<<<<<< HEAD
        <h3>Enter Name or Id you want to suspend</h3>
=======
        <h3>Enter Name or Id you want to Delete</h3>
>>>>>>> b72134c021fa2cf59bd346c99c5cf51e4b95d639
        <div className='searchContainers'>
      <input type='search' placeholder='Search' className='headerSearchInput' />
      <div className='searchIcon'>
      <AiOutlineSearch style={{color:'#0067b8',background:'transparent' ,height:'2.2rem',width:'2.2rem',borderTopRightRadius:'0.5rem',
<<<<<<< HEAD
         borderBottomRightRadius:'0.5rem'}}/>
=======
    borderBottomRightRadius:'0.5rem'}}/>
>>>>>>> b72134c021fa2cf59bd346c99c5cf51e4b95d639
     </div>
    
<div className="list">
<div className="scroll" id="scroll-style">
    
<<<<<<< HEAD
 <DoctorList list={lists}/> </div>
 </div>
=======
 <DoctorList list={lists}/> </div></div>
>>>>>>> b72134c021fa2cf59bd346c99c5cf51e4b95d639
    
     </div>
     <div className="listTitle">
<label>Full Name</label>
<label>Role</label>
</div>
        </section>
    )
}
export default RemoveUser;