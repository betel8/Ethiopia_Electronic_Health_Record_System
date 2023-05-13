import Warning from '../SharedComponents/warning';
import SingleInputContainer from '../SharedComponents/SingleInputContainer';
import CONSTANT from '../Constant';
import './changePassword.css';
import Confirm from '../SharedComponents/Confirm';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
function ChangePassword(props){
   const[controller,setController]=useState(null)
   const submit=(data)=>{
      const token=sessionStorage.getItem("jwt");
      fetch(CONSTANT.SERVER.URL+'change/password',{
         method:'PUT',
         headers:{
            'Content-Type':'application/json',
            'Authorization':token},
         body: JSON.stringify(data)
         }).then(response=>{
         if(response.ok){
            alert('all ok')
            props.close(true,"profile",true)
         }else{
            console.log(JSON.stringify(data))
         }
         }).catch(err=>alert(err))
   }
   
   const confirmFunction=(data)=>{
      setController(<Confirm data={data} submit={submit} close={setController}/>)
   }
   const {handler,handleSubmit,intergratedValue}=Warning(CONSTANT.ChangePassword,confirmFunction);    
   const ChangePasswordValue=intergratedValue.map((value)=>(<SingleInputContainer name={value.name} type={value.type} handler={handler} onchange={onchange} 
      label={value.label} error={value.error} required={value.required} validationType={value.validationType} />))
   const changePasswordFunction=()=>{
      return(
      <form  onSubmit={handleSubmit} style={{zIndex:4000,position:'absolute'}} className='changePassword' >
         <div style={{height:"5vh"}}>
            <GrClose style={{position:"absolute" ,right:"2vw",width:"2.5vw",height:"2.5vh"}} onClick={()=>{props.close(true,"profile",true)}}/>
         </div>
         <h3 className="ChangePasswordTitle">Change Password</h3>
         {ChangePasswordValue}
         <button type='submit'>Change Password</button>
      </form>
      )
   }
   if(controller===null)
      return(changePasswordFunction())
   else {
      return(controller)
   }  
}

     export default ChangePassword