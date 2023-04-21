import React from "react";
import Warning from "../Add_User/warning";
import SingleInputContainer from "../Add_User/SingleInputContainer";
function PatientRecord(){

  const PatientRecordInput=[
        {
            'name':'Name',
            'type':'text',
           'required':true,
           'validationType':'name',
            'label':'Name:'   
        },
        {
          'name':'Age',
          'type':'number',
         'validationType':'age',
          'label':'Age:'
        },
        {
          'name':'Gender',
          'type':'select',
          'validationType':'gender',
          'label':'Gender:'
        },
        {
          'name':'Dadmission',
          'type':'Date/time',
          'validationType':'Dadmission',
          'label':'Date/Time of Admission:'
        },
        {
          'name':'Nstaff',
          'type':'text',
          'validationType':'staffname',
          'label':'Patient received by(Name of Staff Nurse):'
        },
        {
          'name':'PhoneNo',
          'type':'tel',
          'validationType':'cellphone',
          'label':'Phone No:'
        },
        {
          'name':'ReasonICU',
          'type':'text',
          'validationType':'reason',
          'label':'Reason for transfer to ICU'
        },
        {
          'name':'PhoneNo',
          'type':'tel',
          'validationType':'cellphone',
          'label':'Phone No:'
        },
        
    ]
  const {integratedValue,handler,handleSubmit}=Warning(PatientRecordInput,"patient");  
    
    function add (){
        alert("add")
    }
    const PatientRecordInputValues=PatientRecordInput.map((value,index)=>{

    return(<SingleInputContainer name={value.name} type={value.type} handler={handler}
        label={value.label} error={value.error} required={value.required} validationType={value.validationType} />);
      })
    return(
        <form onSubmit={handleSubmit}>
           <div className='formInput'>
         
              {PatientRecordInputValues[0]}
            </div>
       
           <button type="submit">Submit</button>
        </form>
);}
export default PatientRecord