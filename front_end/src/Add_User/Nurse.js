import React from "react";
import Warning from "./warning";
import SingleInputContainer from "./SingleInputContainer";
function Nurse(props){
    const {values,errors,handleInputChange,handleSubmit} = Warning(add);
    const addNurseInputValue=[
        {
          'name':'firstName',
          'type':'text',
          'handler':handleInputChange,
          'error':errors.firstName,
          'label':'First Name'
        }];

    const addNurseInput=addNurseInputValue.map((value,index)=>{
        index=value.name
        return(<SingleInputContainer name={value.name} type={value.type} handler={value.handler}
        label={value.label} error={value.error}/>);
        })
    function add (){
        alert("add")
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className='formInput'>
                {addNurseInput[0]}
            </div>
          
        </form>
    )

}

export default Nurse;