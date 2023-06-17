import React from 'react';
import { GrClose } from 'react-icons/gr';
import "./confirm.css";
import { AiOutlineClose } from 'react-icons/ai';
function Confirm(props) {
    return (
        <div className="confirmContainer">
        <div className='confirmClose'  style={{height:"2vh"}}>
            <AiOutlineClose className='closeIcon' style={{position:"absolute" ,right:"2vw",width:"2.5vw",height:"2.5vh"}} 
            onClick={()=>{props.close(null)}} />
        </div>
        <h3>Confirm to change password</h3>
        <p>Do you really want to change Password?</p>
        <div className="buttons">
            <input type="button" className='confirmCancel' onClick={()=>{props.close(null)}}  value="Cancel"/>
            <input type="button" className='confirmOk' onClick={()=>{props.submit(props.data)}} value="Confirm"/>
        </div>
        </div>);
  }
  
  export default Confirm;
  