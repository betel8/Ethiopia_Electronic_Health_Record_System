import React from "react";
import Warning from "./warning";
function HCP(props){
    const {values,errors,handleInputChange,handleSubmit} = Warning(add);
    function add (){
        alert("add")
    }
    return(
        <form onSubmit={handleSubmit}>

        </form>
    )

}

export default HCP;