import React from "react";
import {FaExclamationTriangle} from 'react-icons/fa';

function SingleInputContainer(props){
return(
    <div className='singleContainer'>
    <input type={props.type} className= {props.name+"Input"}  name={props.name}  onChange={props.handler}/>
    <label htmlFor={props.name}className={props.name+"Label"}>{props.label}</label>
    {props.error && (<p className="warning"><FaExclamationTriangle/>{props.error}</p>)}
    </div>
);
}
export default SingleInputContainer;