import React from "react";
import SingleInputContainer from '../SharedComponents/SingleInputContainer';
import Warning from "../SharedComponents/warning";
import CONSTANT from "../Constant";
function HCP(props){
  const Submit=(user)=>{
   
    const token=sessionStorage.getItem("jwt");

    fetch(CONSTANT.SERVER.URL+'add/hcp',{
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
  const {handler,intergratedValue,handleSubmit} = Warning(CONSTANT.HCP,Submit);

  const addHcpInputValues=intergratedValue.map((value)=>{
      return(<SingleInputContainer name={value.name} type={value.type} handler={handler}
      label={value.label} error={value.error} />);
    })
    return(
        <form  onSubmit={handleSubmit} className="adduserForm">
           <div className='formInput' >
          <div className="personal" > 
            <h3 className="title">Basic Company Information</h3>
            <div className='phoneNumber'>
              {addHcpInputValues[0]}{addHcpInputValues[5]}
            </div>
          
            <div className='address' >
            {addHcpInputValues[2]}
             {addHcpInputValues[3]} {addHcpInputValues[4]}
            </div>
            <div>{addHcpInputValues[6]}</div>
            <div  className='address'>
            {addHcpInputValues[1]} {addHcpInputValues[7]}
            </div>
            

            </div>
          
          </div>
           <button type="submit">Submit</button>
        </form>
      
    )

}

export default HCP;