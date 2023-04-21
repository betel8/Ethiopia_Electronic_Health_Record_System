import React from "react";

function ContentBox(props){
    return(
    <div className="singleContent">
        
        <img src={props.img} alt="icon" className="contentImg"/>
        <h4>Manage {props.to}</h4>
        <div className="buttonContainer">
            <hr/>
            <div className="contentDiv"><div className="description" onClick={()=>{props.Handler(true,props.to,false)}}>Add {props.to}</div><div className="arrow">&gt;</div></div>
            <hr/>
            <div className="contentDiv"><div className="description" onClick={()=>{props.Handler(true,props.to,true)}}>Remove {props.to}</div><div className="arrow">&gt;</div></div>
        </div>
        
    </div>);
}

export default ContentBox;