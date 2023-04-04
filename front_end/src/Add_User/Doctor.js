import React from "react";
import SingleInputContainer from './SingleInputContainer';
import Warning from "./warning";


function Doctor(props){
    const {values,errors,handleInputChange,handleSubmit} = Warning(add);
    const addDoctorInputValue=[
        {
          'name':'firstName',
          'type':'text',
          'error': errors.firstName,
          'label':'First Name'
        },{
          'name':'lastName',
          'type':'text',
          'error':errors.lastName,
          'label':'Last Name'
        },{
          'name':'cellPhone1',
          'type':'tel',
          'error':errors.cellPhone1,
          'label':'Cell Phone 1'
        },{
          'name':'cellPhone2',
          'type':'tel',
          'error':"",
          'label':'Cell Phone 2(optional)'
        },{
          'name':'city',
          'type':'text',
          'error':errors.city,
          'label':'City'
        },{
          'name':'subcity',
          'type':'text',
          'error':errors.subcity,
          'label':'Sub City'
        },{
          'name':'woreda',
          'type':'number',
          'error':errors.woreda,
          'label':'Woreda'
        },{
          'name':'birthPlace',
          'type':'text',
          'error':errors.birthPlace,
          'label':'Birth Place'
        },{
          'name':'dateOfBirth',
          'type':'Date',
          'error':errors.dateOfBirth,
          'label':'Date Of Birth'
        },{
          'name':'email',
          'type':'email',
          'error':errors.email,
          'label':'Email'
        },{
          'name':'universityName',
          'type':'text',
          'error':errors.universityName,
          'label':'University Name'
        },{
          'name':'yearOfGraduaion',
          'type':'date',
          'error':errors.yearOfGraduaion,
          'label':'Year Of Graduaion'
        },{
          'name':'CGPA',
          'type':'number',
          'error':errors.CGPA,
          'label':'CGPA'
        },{
          'name':'language',
          'type':'text',
          'error':errors.language,
          'label':'Language'
        },
      ];
      function add() {
        alert("added");
      }
      const addDoctorInput=addDoctorInputValue.map((value)=>{
        return(<SingleInputContainer name={value.name} type={value.type} handler={handleInputChange}
        label={value.label} error={value.error}/>);
      })
    return(
        <form  onSubmit={handleSubmit}>
          <div className='formInput'>
          <div className='personal_Information'> 
            <h3 className="title">Personal Information</h3>
            <div className='fullName'>
              {addDoctorInput[0]}{addDoctorInput[1]}
            </div>
            <div className='phoneNumber'>
              {addDoctorInput[2]}{addDoctorInput[3]}
            </div>
            <div className='address'>
              {addDoctorInput[4]}{addDoctorInput[5]}{addDoctorInput[6]}
            </div>
            <div className='birthInfo'>
              {addDoctorInput[7]}{addDoctorInput[8]}
            </div>
              {addDoctorInput[9]}
          </div>
          <hr className='middleHr'/>
          <div className='acadamy_information'>
            <h3 className="title">Acadamy Information</h3>
              {addDoctorInput[10]}{addDoctorInput[11]}{addDoctorInput[12]}{addDoctorInput[13]}
          </div>
          </div>
          <button type="submit">Submit</button>
        </form> 
);
}
export default Doctor;