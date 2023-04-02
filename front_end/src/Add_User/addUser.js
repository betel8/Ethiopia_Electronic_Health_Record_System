import React from 'react';
import Warning from './warning';
import {FaExclamationTriangle} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import  {GrFormClose} from 'react-icons/gr'
import './addUser.css'


function AddDoctor(props) {
  const {values,errors,handleInputChange,handleSubmit} = Warning(add, Validate);
  const addDoctorInputValue=[
    {
      'name':'firstName',
      'type':'text',
      'handler':handleInputChange,
      'error':errors.firstName,
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
    },{
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
      'type':'Date',
      'handler':handleInputChange,
      'error':errors.dob,
      'label':'Date Of Birth'
    }
  ];
  const addDoctorInput=addDoctorInputValue.map((value,index)=>{
    index=value.name
    return(<SingleInputContainer name={value.name} type={value.type} handler={value.handler}
     label={value.label}/>);
  })
  function add() {
    alert("added");
  }
  return (
    <section className='add_User'>
      <div className='add_user_Title'>
        <h2>{props.pageTitle}</h2>
        <div className='addDoctorClose' onClick={()=>{props.close(false,"home")}}>
          <GrFormClose size={30}/>
          </div></div>
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
          <div className='singleContainer'>
              <input type="email"  id='email' className= 'emailInput'  name="email" value={values.email || ''}  
                onChange={handleInputChange} required /><FaEnvelope style={{marginLeft:'-2vw'}}/>
              <label htmlFor='email'>Email</label>
              {errors.email && (<p className=" warning">{errors.email}</p>)}
          </div>
        </div>
        <hr className='middleHr'/>
        <div className='acadamy_information'>
          <h3 className="title">Acadamy Information</h3>
          <div className='singleContainer'>
            <input type="text" className= 'warning' onChange={handleInputChange}  name="Uname" value={values.university || ''}  
              id='Uname'/>
            <label htmlFor='Uname'>University Name</label>
            {errors.university && (<p className="warning"><FaExclamationTriangle/>{errors.university}</p>)}
          </div>
          <div className='singleContainer'>
            <input type="date" className= 'warning' onChange={handleInputChange}  name="Gyear" value={values.graduationYear || ''}  
              id='Gyear'/>
            <label htmlFor='Gyear'>Year Of Graduaion</label>
            {errors.graduationYear && (<p className="warning"><FaExclamationTriangle/>{errors.graduationYear}</p>)}
          </div>
          <div className='singleContainer'>
            <input type="number" className= 'warning' onChange={handleInputChange}  name="cgpa" value={values.cgpa || ''}
              id='cgpa'/>
            <label htmlFor='cgpa'>CGPA</label>
            {errors.cgpa && (<p className="warning"><FaExclamationTriangle/>{errors.cgpa}</p>)}
          </div>
          <div className='singleContainer'>
            <input type="text" className= 'warning' name="language" onChange={handleInputChange}   value={values.language || ''}
               id='language'/>
            <label  htmlFor='language'>Language</label>
            {errors.language && (<p className="warning"><FaExclamationTriangle/>{errors.language}</p>)}
          </div>
        </div>
        </div>
        <button>Submit</button>
      </form> 
    </section>   
  );
}
function Validate(values) {
  let errors = {};
  if (!values.firstName) {
    errors.first = 'First Name is required';
  } 
  if (!values.lastName) {
    errors.lastName = 'lastName is required';
  } 
  if (!values.cellphone) {
    errors.cellphone = 'Cell Phone value is required';
  } 
  if (!values.city) {
    errors.city = 'City is required';
  } 
  if (!values.subCity) {
    errors.subCity = 'Sub City is required';
  } 
  if (!values.woreda) {
    errors.woreda = 'Woreda is required';
  } 
  if (!values.birthPlace) {
    errors.birthPlace = 'Birth Place is required';
  } 
  if (!values.dob) {
    errors.dob = 'Date Of Birth is required';
  } 
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  if (!values.university) {
    errors.university = 'University Name is required';
  } 
  if (!values.cgpa) {
    errors.cgpa = 'CGPA is required';
  } 
  if (!values.graduationYear) {
    errors.graduationYear = 'Year of graduation is required';
  } 
  if (!values.language) {
    errors.language = 'Language is required';
  } 
  return errors;
}; 
function SingleInputContainer(props){
return(
  <div className='singleContainer'>
    <input type={props.type} className= {props.name+"Input"}  name={props.name}  onChange={props.handler}/>
    <label htmlFor={props.name}className={props.name+"Label"}>{props.label}</label>
    {props.error && (<p className="warning"><FaExclamationTriangle/>{props.error}</p>)}
  </div>
);
}

export default AddDoctor