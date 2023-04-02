import React from "react";

import SingleInputContainer from './SingleInputContainer';
import Warning from "./warning";
function HCP(props){
    const {values,errors,handleInputChange,handleSubmit} = Warning(add);
    const addHcpInput=[
        {
            'name':'Name',
            'type':'text',
            'handler':handleInputChange,
            'error':errors.HcpName,
            'label':'Company Name'   
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
          },
          {
            'name':'email',
            'type':'email',
            'handler':handleInputChange,
            'error':errors.email,
            'label':'Email'
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
            'name':'location',
            'type':'text',
            'handler':handleInputChange,
            'error':errors.location,
            'label':'Location'   
        },
        {
            'name':'type',
            'type':'text',
            'handler':handleInputChange,
            'error':errors.type,
            'label':'HCP Type'   
        },
        {
            'name':'speciality',
            'type':'text',
            'handler':handleInputChange,
            'error':errors.speciality,
            'label':'Speciality'   
        },
        {
            'name':'owner',
            'type':'text',
            'handler':handleInputChange,
            'error':errors.owner,
            'label':'Owner/Owners'   
        },
        {
            'name':'Fyear',
            'type':'date',
            'handler':handleInputChange,
            'error':errors.Fyear,
            'label':'Foundation Year'   
        }
    ]
    function add (){
        alert("add")
    }
    const addHcpInputValues=addHcpInput.map((value,index)=>{
        index=value.name
        return(<SingleInputContainer name={value.name} type={value.type} handler={value.handler}
        label={value.label} error={value.error}/>);
      })
    return(
        <form onSubmit={handleSubmit}>
           <div className='formInput'>
          <div className='basic_Information'> 
            <h3 className="title">Basic Company Information</h3>
            <div className='Name'>
              {addHcpInputValues[0]}
            </div>
            <div className='phoneNumber'>
              {addHcpInputValues[1]}{addHcpInputValues[2]}
            </div>
            {addHcpInputValues[3]}
            <div className='address'>
              {addHcpInputValues[4]}{addHcpInputValues[5]}{addHcpInputValues[6]}
            </div>
            <div>
              {addHcpInputValues[7]}</div>
            </div>
          <hr className='middleHr'/>
          <div className='detail_information'>
            <h3 className="title">Detail Information</h3>
              {addHcpInputValues[8]}{addHcpInputValues[9]}{addHcpInputValues[10]}
              {addHcpInputValues[11]}
          </div>
          </div>
           <button type="submit">Submit</button>
        </form>
      
    )

}

export default HCP;