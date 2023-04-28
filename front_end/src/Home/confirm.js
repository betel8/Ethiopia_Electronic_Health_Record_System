import React from 'react';
import './firstTime.css'
function Confirm(props) {
    return (
        <div className="containers">
        <div className="confirm">
            <div style={{display:"flex"}}>
        <h3>Confirm to change password</h3>
        <h4>X</h4>
        </div>
        <p>Do you really want to change Password?</p>
        
        <input type="button" id="cancel" style={{ boxShadow: "0 0.5vh 0.5vw rgba(37, 36, 36, 0.338)"}} value="Cancel"/>
        <input type="button" id="confirm" value="Confirm"/>
      
        </div>
            </div>);
  }
  
  export default Confirm;
  