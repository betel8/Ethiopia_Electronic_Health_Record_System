import React from "react";
function OneActivity (props){
    return(
<div>
<div className="oneperson">
<h4> Tigist {props.list.name}</h4>

<p>  {props.list.status}</p>
<h2>.</h2>  
</div>

</div>
    );
}
export default OneActivity