import React from 'react';
import './addUser.css'
import Doctor from './Doctor';
import Nurse from './Nurse';
import Pharmacist from './Pharmacist'
import Admin from './Admin';
import HCP from './HCP';

import { GrFormClose } from "react-icons/gr";


function AddUser(props) {
  let displayedForm=""
  if(props.pageTitle==="Doctor")
    displayedForm=<Doctor/>; 
  else if(props.pageTitle==="Nurse")
    displayedForm=<Nurse/>;
  else if(props.pageTitle==="Pharmacist")
    displayedForm=<Pharmacist/>
  else if(props.pageTitle==="Admin")
    displayedForm=<Admin/>
  else if(props.pageTitle==="Health Care Provider")
    displayedForm=<HCP/>
  return(
    <section className='add_User'>
    <div className='add_user_Title'>
      <h2>Add New {props.pageTitle}</h2>
      <div className='addDoctorClose' onClick={()=>{props.close(false,"home")}}>
        <GrFormClose size={30}/>
        </div></div>
        {displayedForm}
        
    </section>
  )
}

export default AddUser