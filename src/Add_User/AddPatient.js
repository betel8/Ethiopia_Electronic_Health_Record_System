import React from "react";
import Warning from "../SharedComponents/warning";
import SingleInputContainer from "../SharedComponents/SingleInputContainer";
import CONSTANT from "../Constant";
function AddPatient(props){

    
    
  const AddPatientRecord=(patient)=>{
    const token=sessionStorage.getItem("jwt");
    
    fetch(CONSTANT.SERVER.URL+'add/patient',{
      method:'POST',
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
  const {intergratedValue,handler,handleSubmit}=Warning(CONSTANT["patient"],AddPatientRecord);  
  const addDoctorInput=intergratedValue.map((value)=>{
    if(value.type==="select"){
      return(<SingleInputContainer name={value.name} type={value.type} handler={handler} options={value.options}
        label={value.label} error={value.error} required={value.required} validationType={value.validationType}/>);
    }else
      return(<SingleInputContainer name={value.name} type={value.type} handler={handler}
        label={value.label} error={value.error} required={value.required} validationType={value.validationType}/>);
  })

    return( <form  onSubmit={handleSubmit} className="adduserForm">
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
      <div className='birthInfo'>
        {addDoctorInput[8]}{addDoctorInput[9]}
      </div>
      <div className="emailAndGender">
        {addDoctorInput[10]}
      </div>
    </div>
    
    </div>
   
    <button type="submit">Submit</button>
  </form>
);}
export default AddPatient