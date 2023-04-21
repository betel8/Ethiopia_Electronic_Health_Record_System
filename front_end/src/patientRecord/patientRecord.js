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
          'type':'datetime-local',
          'validationType':"name",
          'label':'Date/Time of Admission:'
        },
        {
          'name':'PhoneNo',
          'type':'tel',
          'validationType':'phone',
          'label':'Phone No:'
        },
        {
          'name':'Nstaff',
          'type':'text',
          'validationType':"name",
          'label':'Patient received by(Name of Staff Nurse):'
        },
     
        {
          'name':'ReasonICU',
          'type':'textarea',
          'validationType':'reason',
          'label':'Reason for transfer to ICU'
        },
        {
          'name':'regular',
          'type':'textarea',
          'label':'Regular medication on:',
          
        'validationType':"name",
        },
        {
          'name':'allergy',
          'type':'textarea',
          'validationType':'name',
          'label':'Allergies Known(if any):'
        },
        {
          'name':'Pre',
          'type':'textarea',
          'validationType':'name',
          'label':'Pre Existing Conditions:'
        },
        {
          'name':'complaints',
          'type':'textarea',
          'validationType':'name',
          'label':'Presenting complaints:'
        },
        {
          'name':'history',
          'type':'textarea',
          'validationType':'name',
          'label':'History:'
        },
        {
          'name':'bp',
          'type':'text',
          'validationType':'name',
          'label':'BP:'
        },
        {
          'name':'pulse',
          'type':'text',
          'validationType':'name',
          'label':'Pulse:'
        },
        {
          'name':'resp',
          'type':'text',
          'validationType':'name',
          'label':'Resp:'
        },
        {
          'name':'temprature',
          'type':'text',
          'validationType':'name',
          'label':'Temprature:'
        },
        {
          'name':'gcs',
          'type':'select',
          'validationType':'name',
          'label':'GCS:'
        },
        {
          'name':'o2',
          'type':'text',
          'validationType':'name',
          'label':'O2 Sat:'
        },
        {
          'name':'pupils',
          'type':'text',
          'validationType':'name',
          'label':'Pupils:'
        },
        {
          'name':'peripheries',
          'type':'select',
          'validationType':'name',
          'label':'Peripheries:'
        },
        {
          'name':'mark',
          'type':'select',
          'validationType':'name',
          'label':'Identification Mark if any:'
        },
        {
          'name':'skin',
          'type':'textarea',
          'validationType':'name',
          'label':'Skin Status:'
        },
        {
          'name':'surgical',
          'type':'textarea',
          'validationType':'name',
          'label':'Sergical scars if any:'
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
      <section className='add_User' >
      <div className='add_user_Title'>
        <h2>Add New Patient</h2>
    </div>
        <form onSubmit={handleSubmit}>
           <div className='formInput'>
           <div className='basic_Information'> 
           <h3 className="title">Patient registration</h3>
                  <div className='phoneNumber'>
              
            {PatientRecordInputValues[0]}{PatientRecordInputValues[1]}{PatientRecordInputValues[2]}
            </div>
            
            <div className='name'>
            {PatientRecordInputValues[3]}
            
               {PatientRecordInputValues[4]}
               
               {PatientRecordInputValues[5]}
               {PatientRecordInputValues[6]}
              
              {PatientRecordInputValues[7]}
              {PatientRecordInputValues[8]}
              {PatientRecordInputValues[9]}
              
              {PatientRecordInputValues[10]}
              </div>
            </div>
          <hr className='middleHr'/>
             
           
            <div className="additional_information">
            <h3 className="title">Previous History</h3>
             {PatientRecordInputValues[11]}
             <hr className="middleHr"/>
              <h3 className="title">General Examination On Admission</h3>
             <div style={{display:"flex"}}>
              {PatientRecordInputValues[12]}{PatientRecordInputValues[13]}
              </div>
              <div style={{display:"flex"}}>
                {PatientRecordInputValues[14]}{PatientRecordInputValues[15]}{PatientRecordInputValues[16]}
              </div>
              <div style={{display:"flex"}}>
                {PatientRecordInputValues[17]}{PatientRecordInputValues[18]}
              </div>
              {PatientRecordInputValues[19]}  
              {PatientRecordInputValues[20]}
             
              {PatientRecordInputValues[21]}
              {PatientRecordInputValues[22]}
          
            
       </div>
       </div>
           <button type="submit">Submit</button>
        </form></section>  
);}
export default PatientRecord