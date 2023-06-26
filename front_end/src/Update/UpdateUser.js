import './update.css'
import UpdateInputContainer from "../SharedComponents/UpdateInputContainer";
import UpdateWarning from "../SharedComponents/UpdateWarning";
import CONSTANT from "../Constant";
import { FaUserNurse,FaUserShield,FaUserMd } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { useEffect, useState } from 'react';
import AddSpeciality from "./AddSpeciality";
import UpdateSpeciality from "./UpdateSpeciality"
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
    const [specialityList,setSpecialityList]=useState()
    const getSpeciality=async()=>{
      const response = await fetch(
        CONSTANT.SERVER.URL+"get/speciality?email="+props.user.email,
        {
            headers:{
                'Content-Type':'application/json',
                'Authorization':sessionStorage.getItem("jwt"),
                }
        }
    ).then((response) => response.json());

    if(isNaN(response)){
        setSpecialityList(<UpdateSpeciality speciality={response}/>) 
    }
    }
    useEffect((e)=>{getSpeciality()},[])
    const [speciality,setSpeciality]=useState([]);
    const addInputValue=props.user.role==="Doctor"?CONSTANT.Doctor
    :props.user.role==="Nurse"?CONSTANT.Nurse:CONSTANT.Pharmacist;
    const {intergratedValue,handler,handleSubmit,close} = UpdateWarning(addInputValue,submit,props.user); 
    const updateInputs=intergratedValue.map((value)=>{
        return(<UpdateInputContainer name={value.name} type={value.type} handler={handler} options={value.options}
            label={value.label} error={value.error} required={value.required} validationType={value.validationType} 
            value={value.value} close={close} submit={handleSubmit} />)
    }) 

    return(

        <div className="SingleUser"> 
            <ul style={{display:'flex'}}>
                <li>{
                  props.user.role==="superAdmin"||props.user.role==="admin"?<FaUserShield style={{width:"10vw",height:"10vh",color:"#D6B85A"}}/>:
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
</ul>
  <div>
    {specialityList}
    {speciality}
  </div>
  {(props.user.role==="nurse"||props.user.role==="doctor"||props.user.role==="pharmacist")&&
    <button onClick={()=>{
      let tmp=[...speciality];
      tmp.push(<AddSpeciality email={props.user.email}/>)
      setSpeciality(tmp)}} 
    style={{all:"unset", border:"solid 0.1vh #00FF00", padding:"0.5vh 0.5vw",borderRadius:"0.5vh",backgroundColor:"#00ff0082",
    marginLeft:"10vh",marginTop:"3vh"}}>Speciality + </button> 
  }
  </div>
        );
    }
    export default UpdateUser