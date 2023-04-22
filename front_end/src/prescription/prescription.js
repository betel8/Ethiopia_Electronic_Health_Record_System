import React from "react";
import Warning from "../Add_User/warning";
import SingleInputContainer from "../Add_User/SingleInputContainer";
function Prescription(){

  const PatientRecordInput=[
        {
            'name':'Name',
            'type':'text',
           'required':true,
           'validationType':'name',
            'label':'Full Name:'   
        },
        
        {
            'name':'card',
            'type':'number',
           'validationType':'name',
            'label':'Card Number:'
          },
          {
            'name':'PhoneNo',
            'type':'tel',
            'validationType':'phone',
            'label':'Phone No:'
          }, {
          'name':'Age',
          'type':'number',
         'validationType':'age',
          'label':'Age:'
        },
        {
          'name':'Gender',
          'type':'select',
          'validationType':'gender',
          'label':'Gender'
        },
        {
          'name':'city',
          'type':'name',
          'validationType':"name",
          'label':'City'
        },
        {
            'name':'subcity',
            'type':'name',
            'validationType':"name",
            'label':'Sub City'
          },
          {
            'name':'Woreda',
            'type':'number',
            'validationType':"name",
            'label':'Woreda'
          },
          {
            'name':'Hno',
            'type':'number',
            'validationType':"name",
            'label':'House Number'
          },
      
        {
          'name':'outPatient',
          'type':'text',
          'validationType':"name",
          'label':'OutPatient'
        },
     
        {
            'name':'inPatient',
            'type':'text',
            'validationType':"name",
            'label':'InPatient'
          },
          {
            'name':'sectionWard',
            'type':'text',
            'validationType':"name",
            'label':'SectionWard'
          },
        {
          'name':'emergency',
          'type':'text',
          'label':'Emergency',
          
        'validationType':"name",
        },
        {
          'name':'diagnosis',
          'type':'text',
          'validationType':'name',
          'label':'Diagnosis, if not ICD code'
        },
        {
            'name':'table',
            'type':'table',
            'validationType':'name',
               },  

    ]
    
    

  const {integratedValue,handler,handleSubmit}=Warning(PatientRecordInput,"patient");  
    
    
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
           <h3 className="title">Patient Prescription</h3>
           <div >
                  <div className='name'>
              
            {PatientRecordInputValues[0]}
            </div>
            <div className="phoneNumber">
            {PatientRecordInputValues[1]} {PatientRecordInputValues[2]}
            </div>
            </div>
            <div className='phoneNumber'>
           {PatientRecordInputValues[3]} {PatientRecordInputValues[4]} {PatientRecordInputValues[5]}</div>
            <div className='phoneNumber'>
            {PatientRecordInputValues[6]} {PatientRecordInputValues[7]}
               {PatientRecordInputValues[8]} 
               </div>
               <div className='phoneNumber'>
                
                {PatientRecordInputValues[9]}{PatientRecordInputValues[10]} {PatientRecordInputValues[11]} </div>
                <div className='name' > {PatientRecordInputValues[12]} 
              </div>
              <div className="name" >
            {PatientRecordInputValues[13] } </div>
            </div>   
        
          <hr className='middleHr'/>
             
           
            <div className="additional_information">
            <h3 className="title">Prescription</h3>
             {PatientRecordInputValues[14]}
          </div>
       </div >
           <button type="submit">Submit</button>
        </form></section>  
);}
export default Prescription