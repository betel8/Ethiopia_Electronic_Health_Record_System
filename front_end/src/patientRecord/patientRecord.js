import React from "react";
import CONSTANT from "../Constant";
import { GrFormClose } from "react-icons/gr";
import UpdateInputContainer from "../SharedComponents/UpdateInputContainer";
import UpdateWarning from "../SharedComponents/UpdateWarning";
function PatientRecord(props){


    const admit=(id)=>{
        const token=sessionStorage.getItem("jwt");
        
        fetch(CONSTANT.SERVER.URL+'admitted/patient?id='+id,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Authorization':token},
        }).then(response=>{
        if(response.ok){
            alert('all ok')
        }else{
            console.log(JSON.stringify(""))
        }
        }).catch(err=>alert(err))
    }
    const AddPatientRecord=(patient)=>{
        const token=sessionStorage.getItem("jwt");
        
        fetch(CONSTANT.SERVER.URL+'update/patient',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Authorization':token},
        body: JSON.stringify(patient)
        }).then(response=>{
        if(response.ok){
            alert('all ok')
        }else{
            console.log(JSON.stringify(patient))
        }
        }).catch(err=>alert(err))
    }
    const {intergratedValue,handler,handleSubmit,close}=UpdateWarning(CONSTANT["patient"],AddPatientRecord,props.PatientRecord);  
  const addDoctorInput=intergratedValue.map((value)=>{
    
    return(<UpdateInputContainer name={value.name} type={value.type} handler={handler} options={value.options}
        label={value.label} error={value.error} required={value.required} validationType={value.validationType} 
        value={value.value} close={close} submit={handleSubmit} />)
  })

    return( 
    
        <section className='add_User' >
        <div className='add_user_Title'>
          <h2>Add New {props.pageTitle}</h2>
          <div className='addDoctorClose' onClick={()=>{props.close(false,"home")}}>
            <GrFormClose style={{ fontSize: '2rem' }}/>
            </div></div>
            
            <div  onSubmit={handleSubmit} className="adduserForm">
    <div className='formInput'>
    <div className='personal_Information' style={{width:"100%"}}> 
      <h3 className="title">Basic Patient Record</h3>
      <div className='fullName'>
        {addDoctorInput[0]}{addDoctorInput[1]} {addDoctorInput[2]}
      </div>

      <div className='' style={{display:"flex"}}>
        {addDoctorInput[3]}{addDoctorInput[4]}{addDoctorInput[5]}
      </div>
      <div className='phoneNumber'>
       {addDoctorInput[6]}{addDoctorInput[7]}
      </div>
      <div style={{display:"flex"}}>
        {addDoctorInput[8]}{addDoctorInput[9]}
      </div>
      <div className="emailAndGender">
        {addDoctorInput[10]}
      </div>
    </div>
    
    </div>
   
    <button onClick={()=>{admit(props.PatientRecord["id"])}}>Admit</button>
  </div>
        </section>
    
    
   
);}
export default PatientRecord