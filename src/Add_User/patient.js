import React from "react";
import Warning from "../SharedComponents/warning";
import './addUser.css'
import SingleInputContainer from "../SharedComponents/SingleInputContainer";
function Patient(props){
    const {values,errors,handleInputChange,handleSubmit} = Warning(add);
    const addPatientInputValue=[
        {
            'name':'firstName',
            'type':'text',
            'handler':handleInputChange,
            'error': errors.first,
            'label':'First Name'
          },{
            'name':'lastName',
            'type':'text',
            'handler':handleInputChange,
            'error':errors.lastName,
            'label':'Last Name'
          },{
            'name':'cellPhone1',
            'type':'tel',
            'handler':handleInputChange,
            'error':errors.cellphone,
            'label':'Cell Phone 1'
          },{
            'name':'cellPhone2',
            'type':'tel',
            'handler':handleInputChange,
            'error':"",
            'label':'Cell Phone 2(optional)'
          },{
            'name':'city',
            'type':'text',
            'handler':handleInputChange,
            'error':errors.city,
            'label':'City'
          },{
            'name':'subcity',
            'type':'text',
            'handler':handleInputChange,
            'error':errors.subCity,
            'label':'Sub City'
          },{
            'name':'woreda',
            'type':'number',
            'handler':handleInputChange,
            'error':errors.woreda,
            'label':'Woreda'
          },
          {
            'name':'birthPlace',
            'type':'text',
            'handler':handleInputChange,
            'error':errors.birthPlace,
            'label':'Birth Place'
          },{
            'name':'dateOfBirth',
            'type':'Date',
            'handler':handleInputChange,
            'error':errors.dob,
            'label':'Date Of Birth'
          },{
            'name':'email',
            'type':'email',
            'handler':handleInputChange,
            'error':errors.email,
            'label':'Email'
          },{
            'name':'gender',
            'type':'text',
            'handler':handleInputChange,
            'error':errors.gender,
            'label':'Gender'
          },
          {
            'name':'bloodType',
            'type':'text',
            'handler':handleInputChange,
            'error':errors.blood,
            'label':'BloodType'
          }];

    const addPatientInput=addPatientInputValue.map((value,index)=>{
        index=value.name
        return(<SingleInputContainer name={value.name} type={value.type} handler={value.handler}
        label={value.label} error={value.error}/>);
        })
    function add (){
        alert("add")
    }
    return(
        
        <form onSubmit={handleSubmit}>
            
           <div className="PatientTitle">
                <h2>Add New Patient</h2>
                </div>
                <div className='formInput'>
          <div className='personal_InformationPatient'> 
            <h3 className="title">Personal Information</h3>
            <div className='fullName'>
              {addPatientInput[0]}{addPatientInput[1]}
            </div>
            <div className='phoneNumber'>
              {addPatientInput[2]}{addPatientInput[3]}
            </div>
            <div className='address'>
              {addPatientInput[4]}{addPatientInput[5]}{addPatientInput[6]}
            </div>
            <div className='birthInfo'>
              {addPatientInput[7]}{addPatientInput[8]}   </div>
            
            {addPatientInput[9]}
          
         
              {addPatientInput[10]}
              {addPatientInput[11]}
              
          </div>
         
          </div>
          
          <button type="submit">Submit</button>
       
      </form> 
      
    )

}

export default Patient;