import { RiSubtractFill, RiUser2Fill } from "react-icons/ri";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import './update.css'
import { useState } from "react";

function SingleUser(props){
 
    const [AddInput,setAddInput] =useState([]);
    
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
    <li><input type='text'className="name" value='First Name'/><AiFillEdit/></li>
   <li><input type='text'className="name" value='Last Name'/><AiFillEdit/></li>
</ul>
<h4 style={{marginLeft:'10vw'}}>Personal Information</h4>
<ul>
<ul style={{display:'flex'}} >
<li><input type='tel' value='Cell Phone'/><AiFillEdit/></li>
<li><input type='email' value='Email'/><AiFillEdit/></li>
  </ul>
<ul style={{display:'flex'}} >
<li><input type='text' value='City'/><AiFillEdit/></li>
    <li><input type='text' value='Sub City'/><AiFillEdit/></li>
    <li><input type='text' value='Woreda'/><AiFillEdit/></li>

</ul>

<ul style={{display:'flex'}} >
<li><input type='text' value='Birth Place'/><AiFillEdit/></li>
    <li><input type='text' value='Date Of birth'/><AiFillEdit/></li>
    <li><input type='text' value='gender'/><AiFillEdit/></li>

</ul>
</ul>
<h4 style={{marginLeft:'10vw'}}>Acadamic Information</h4>
<ul>
    <ul style={{display:'flex'}} >
    <li><input type='text' value='University Name'/><AiFillEdit/></li>
    <li><input type='text' value='year of graduation'/><AiFillEdit/></li>
    <li><input type='text' value='Cgpa'/><AiFillEdit/></li>

    </ul>
    <ul style={{display:'flex' }}>
    <li><input type='text' value='language'/><AiFillEdit/></li>
    <li><input type='text' value='qualification'/><AiFillEdit/></li>
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
    export default SingleUser