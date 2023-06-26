import React from "react";
import SingleUpdate from "./SingleUpdate";
function UpdateSpeciality (props){
    let count=0;
    const tempSpec=props.speciality.map((value)=>{
        count+=1;
        return(<SingleUpdate value={value} count={count}/>) 
    })
    
    return(
        <div>
            <h4 style={{marginLeft:'10vw'}}>Speciality Information</h4>
            {tempSpec}

        </div>
    );
}
export default UpdateSpeciality;