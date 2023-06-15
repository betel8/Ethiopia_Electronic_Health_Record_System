import { RiSubtractFill, RiUser2Fill } from "react-icons/ri";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import './update.css'
import { useState } from "react";
import UpdateInputContainer from "../SharedComponents/UpdateInputContainer";
import Warning from "../SharedComponents/warning";
import CONSTANT from "../Constant";
function UpdateUser(props){
    const submit=(user)=>{
        user={...user,
            "role": "admin1",
          };
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
    const {intergratedValue,handler,handleSubmit,closeForUpdate} = Warning(addInputValue,submit,props.user); 
    const cancelFunction=async(arg)=>{
      const response = await fetch(
          CONSTANT.SERVER.URL+"get/user",
          {
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':sessionStorage.getItem("jwt")
                  }
          }
      ).then((response) => response.json());
      closeForUpdate(response)
  }
    const updateInputs=intergratedValue.map((value)=>{
        return(<UpdateInputContainer name={value.name} type={value.type} handler={handler} options={value.options}
            label={value.label} error={value.error} required={value.required} validationType={value.validationType} 
            value={value.value} close={cancelFunction} submit={handleSubmit} />)
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
   

    return(

        <div className="SingleUser"> 
            <ul style={{display:'flex'}}>
                <li><RiUser2Fill style={{width:'10vw',height:'10vh'}}/></li>
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
    <li>{updateInputs[9]}</li>

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