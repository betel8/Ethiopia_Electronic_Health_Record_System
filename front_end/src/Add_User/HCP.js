import React from "react";
import SingleInputContainer from '../SharedComponents/SingleInputContainer';
import Warning from "../SharedComponents/warning";
import CONSTANT from "../Constant";
function HCP(props){
  const Submit=(data)=>{
    const token=sessionStorage.getItem("jwt");
    fetch(CONSTANT.SERVER.URL+'add/HCP',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':token},
      body: JSON.stringify(data)
    }).then(response=>{
      if(response.ok){
        alert('all ok')
      }else{
        console.log(JSON.stringify(data))
      }
    }).catch(err=>alert(err)) 
  }  
  const {handler,intergratedValue,handleSubmit} = Warning(CONSTANT.HCP,Submit);

  const addHcpInputValues=intergratedValue.map((value)=>{
      return(<SingleInputContainer name={value.name} type={value.type} handler={handler}
      label={value.label} error={value.error} />);
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