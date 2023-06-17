import React from 'react';
import './addUser.css'
import DisplayForm from './DisplayForm';
import HCP from "./HCP"
import { GrFormClose } from "react-icons/gr";
import AddAdmin from "./AddAdmin"


function AddUser(props) {
  let displayFormValue;
  if(props.pageTitle==="Doctor"||props.pageTitle==="Nurse"||props.pageTitle==="Pharmacist"){
    displayFormValue=<DisplayForm pageTitle={props.pageTitle}/>
  }else if(props.pageTitle==="HCP"){
    displayFormValue=<HCP pageTitle={props.pageTitle}/>
  }else{
    displayFormValue=<AddAdmin pageTitle={props.pageTitle}/>
  }
  return(
    <section className='add_User' >
    <div className='add_user_Title'>
      <h2>Add New {props.pageTitle}</h2>
      <div className='addDoctorClose' onClick={()=>{props.close(false,"home")}}>
        <GrFormClose style={{ fontSize: '2rem' }}/>
        </div></div>
        {displayFormValue}
        
    </section>
  )
}

export default AddUser