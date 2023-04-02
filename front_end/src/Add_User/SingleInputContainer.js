import React from "react";
import {FaExclamationTriangle} from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";
import './addUser.css'

function SingleInputContainer(props){
return(
    <div className='singleContainer'>
    <input type={props.type} className= {props.name+"Input"}  name={props.name}  onChange={props.handler}/>
    <label htmlFor={props.name}className={props.name+"Label"}>{props.label}</label>
    {props.name==='email'&&<FaEnvelope style={{marginLeft:'-2vw'}}/>}
    {props.error&& (<p className="warning"><FaExclamationTriangle/>{props.error}</p>)}
    </div>
);
}
export default SingleInputContainer;