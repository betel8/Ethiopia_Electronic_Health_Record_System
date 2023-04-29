import React from "react";
import SingleInputContainer from '../SharedComponents/SingleInputContainer';
import Warning from "../SharedComponents/warning";
import CONSTANT from "../Constant";


function DisplayForm(props){
      const addDoctorInputValue=props.pageTitle==="Doctor"?
        CONSTANT.Doctor:props.pageTitle==="Nurse"?CONSTANT.Nurse:CONSTANT.Pharmacist;
      const linker=props.pageTitle==="Doctor"?"doctor":props.pageTitle==="Nurse"?"nurse":"pharmacist";
      const addUser=(user)=>{
        user={...user,
          "role": linker,
        };
        const token=sessionStorage.getItem("jwt");
    
        fetch(CONSTANT.SERVER.URL+'add/'+linker,{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'Authorization':token},
          body: JSON.stringify(user)
        }).then(response=>{
          if(response.ok){
            alert('all ok')
          }else{
            console.log(JSON.stringify(user))
          }
        }).catch(err=>alert(err))
    
      }

      const {intergratedValue,handler,handleSubmit} = Warning(addDoctorInputValue,addUser);
      const addDoctorInput=intergratedValue.map((value)=>{
        if(value.type==="select"){
          return(<SingleInputContainer name={value.name} type={value.type} handler={handler} options={value.options}
            label={value.label} error={value.error} required={value.required} validationType={value.validationType}/>);
        }else
          return(<SingleInputContainer name={value.name} type={value.type} handler={handler}
            label={value.label} error={value.error} required={value.required} validationType={value.validationType}/>);
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
            <div className="emailAndGender">
              {addDoctorInput[9]}{addDoctorInput[10]}
            </div>
          </div>
          <hr className='middleHr'/>
          <div style={{display:"flex",flexFlow:"column"}}>
            <div className='acadamy_information'>
              <h3 className="title">Acadamy Information</h3>
                <div style={{display:"flex"}}>{addDoctorInput[11]}{addDoctorInput[12]}</div>
                <div style={{display:"flex"}}>{addDoctorInput[13]}{addDoctorInput[14]}</div>
            </div>
            <hr className="middleHr"/>
            <div className="additional_information">
              <h3 className="title">Additional Information</h3>
              <div style={{display:"flex"}}>
                {addDoctorInput[15]}{addDoctorInput[16]}
              </div>
            </div>
          </div>
          </div>
         
          <button type="submit">Submit</button>
        </form> 
);
}
export default DisplayForm;