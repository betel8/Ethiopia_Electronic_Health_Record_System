import React from 'react';
import Warning from './warning';
import  {GrFormClose} from 'react-icons/gr'
import './addUser.css'
import SingleInputContainer from './SingleInputContainer';


function addUser(props) {
  const {values,errors,handleInputChange,handleSubmit} = Warning(add);
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
    },{
      'name':'universityName',
      'type':'text',
      'handler':handleInputChange,
      'error':errors.university,
      'label':'University Name'
    },{
      'name':'yearOfGraduaion',
      'type':'date',
      'handler':handleInputChange,
      'error':errors.graduationYear,
      'label':'Year Of Graduaion'
    },{
      'name':'CGPA',
      'type':'number',
      'handler':handleInputChange,
      'error':errors.cgpa,
      'label':'CGPA'
    },{
      'name':'language',
      'type':'number',
      'handler':handleInputChange,
      'error':errors.language,
      'label':'Language'
    },
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
            {addDoctorInput[9]}
        </div>
        <hr className='middleHr'/>
        <div className='acadamy_information'>
          <h3 className="title">Acadamy Information</h3>
            {addDoctorInput[10]}{addDoctorInput[11]}{addDoctorInput[12]}{addDoctorInput[13]}
        </div>
        </div>
        <button>Submit</button>
      </form> 
    </section>   
  );
}

export default addUser