import React from "react";
import CONSTANT from "../Constant";
import SingleInputContainer from "../SharedComponents/SingleInputContainer"
import Warning from "../SharedComponents/warning"

function AddSpeciality(props){
    const AddData=async(data)=>{
        fetch(CONSTANT.SERVER.URL+"set/speciality?user="+props.email,{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              'Authorization':sessionStorage.getItem("jwt")},
            body: JSON.stringify(data)
          }).then(response=>{
            if(response.ok){
              alert('all ok')
            }else{
              console.log(JSON.stringify(data))
            }
          }).catch(err=>alert(err))
    }
    const {intergratedValue,handler,handleSubmit} = Warning(CONSTANT["Speciality"],AddData);
    const inputs=intergratedValue.map((value)=>{
        return(<SingleInputContainer name={value.name} type={value.type} handler={handler}
            label={value.label} error={value.error} required={value.required} validationType={value.validationType}/>);
    })
    return(
        <form onSubmit={handleSubmit} className="AddSpeciality">
            <h4 style={{padding:0,margin:"2vh 0"}}>Insert New Speciality</h4>
            <div style={{display:"flex"}}>{inputs}</div>
            <button type="submit" style={{width:"10vw",height:"4vh"
        ,backgroundColor:"#5689C0",outline:"none",border:"none",marginLeft:"5vw",
        marginTop:"2vh"}}>Add Speciality</button>
        </form>
    )
}
export default AddSpeciality;