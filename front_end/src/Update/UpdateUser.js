import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import './update.css'
import { useState } from "react";
import UpdateInputContainer from "../SharedComponents/UpdateInputContainer";
import UpdateWarning from "../SharedComponents/UpdateWarning";
import CONSTANT from "../Constant";
import { FaUserNurse,FaUserShield,FaUserMd } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
function UpdateUser(props){
    const submit=(user)=>{
          console.log(user)
          const token=sessionStorage.getItem("jwt");
      
          fetch(CONSTANT.SERVER.URL+'put/user',{
            method:'PUT',
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
      
    const addInputValue=props.user.role==="Doctor"?CONSTANT.Doctor
    :props.user.role==="Nurse"?CONSTANT.Nurse:CONSTANT.Pharmacist;
  

    const [AddInput,setAddInput] =useState([]);
    const {intergratedValue,handler,handleSubmit,close} = UpdateWarning(addInputValue,submit,props.user); 
    const updateInputs=intergratedValue.map((value)=>{
        return(<UpdateInputContainer name={value.name} type={value.type} handler={handler} options={value.options}
            label={value.label} error={value.error} required={value.required} validationType={value.validationType} 
            value={value.value} close={close} submit={handleSubmit} />)
    }) 
    
    const handleSpecialityAdd =()=>{
    const Add=[...AddInput,[]]
        setAddInput(Add);
    }
    const handleChange=(onChangeValue,i) =>{
    const inputData=[...AddInput]
    inputData[i]=onChangeValue.target.value;
    setAddInput(inputData)
    }
    if(props.user.role==="nurse"){
        
    }else if (props.role==="superAdmin" ){
 
    }else if (props.user.role==="doctor"){
       
    }else if(props.role==="pharmacist"){
        
    }

    return(

        <div className="SingleUser"> 
            <ul style={{display:'flex'}}>
                <li>{
                  props.user.role==="superAdmin"?<FaUserShield style={{width:"10vw",height:"10vh",color:"#D6B85A"}}/>:
                  props.user.role==="doctor"?<FaUserMd style={{width:"10vw",height:"10vh",color:"#52B2BF"}}/>:
                  props.user.role==="nurse"?<FaUserNurse style={{width:"10vw",height:"10vh",color:"#FA86C4"}}/>:
                  <MdLocalPharmacy style={{width:"10vw",height:"10vh",color:"#4CBB17"}}/>
                  }</li>
                <li>{updateInputs[0]}</li>
                <li>{updateInputs[1]}</li>
            </ul>
            <h4 style={{marginLeft:'10vw'}}>Personal Information</h4>
      <ul>
      <ul style={{display:'flex'}} >
        <li>{updateInputs[2]}</li>
        <li>{updateInputs[3]}</li>
      </ul>
<ul style={{display:'flex'}} >
<li>{updateInputs[4]}</li>
    <li>{updateInputs[5]}</li>
    <li>{updateInputs[6]}</li>

</ul>

<ul style={{display:'flex'}} >
    <li>{updateInputs[7]}</li>
    <li>{updateInputs[8]}</li>
    <li className="emailInputUpdate">{updateInputs[9]}</li>

</ul>
</ul>
<h4 style={{marginLeft:'10vw'}}>Acadamic Information</h4>
<ul>
    <ul style={{display:'flex'}} >
    <li>{updateInputs[10]}</li>
    <li>{updateInputs[11]}</li>
    <li>{updateInputs[12]}</li>

    </ul>
    <ul style={{display:'flex' }}>
    <li>{updateInputs[13]}</li>
    <li>{updateInputs[14]}</li>
    </ul>
    <ul>
        <li><span >Speciality<AiOutlinePlus onClick={()=>handleSpecialityAdd()}/></span>
    
    {
        AddInput.map((val,i) =>{
            return(
        <div>
<input type="text" placeholder="Speciality" name="speciality" value={val.Year} onChange= {e =>handleChange(e,i)}/> <AiFillEdit/>
<input type="text" placeholder="Speciality"  name="speciality" value={val.Profession} onChange= {(e)=>handleChange(e,i)}/> <AiFillEdit/>
  
<input type="text" placeholder="Speciality"  name="speciality" value={val.University} onChange= {(e)=>handleChange(e,i)}/> <AiFillEdit/>
  
    </div>)
    })}
    
    </li></ul>
   
</ul>
  </div>
        );
    }
    export default UpdateUser