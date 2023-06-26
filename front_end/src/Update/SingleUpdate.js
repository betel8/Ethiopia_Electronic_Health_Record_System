import React from "react";
import CONSTANT from "../Constant";
import UpdateInputContainer from "../SharedComponents/UpdateInputContainer";
import UpdateWarning from "../SharedComponents/UpdateWarning";
function SingleUpdate(props){
    const submit=()=>{

    }
    const {intergratedValue,handler,handleSubmit,close} = UpdateWarning(CONSTANT.Speciality,submit,props.value);
    const inputs=intergratedValue.map((value)=>{
        return(<UpdateInputContainer name={value.name} type={value.type} handler={handler} options={value.options}
            label={value.label} error={value.error} required={value.required} validationType={value.validationType} 
            value={value.value} close={close} submit={handleSubmit} />)
    }) 
    return(
        <ul style={{display:"flex",marginLeft:"2.5vw",alignItems:"center"}}>
            <li style={{width:"1vw",color:"white",backgroundColor:"#7953A9",textAlign:"center",height:"3vh",
            fontSize:"1rem",paddingLeft:"0.5vw",marginRight:"0.5vw",borderRadius:"3vh"}}>{props.count}</li>
            <li>{inputs[0]}</li>
            <li>{inputs[1]}</li>
            <li>{inputs[2]}</li>
        </ul>
    )
}
export default SingleUpdate;