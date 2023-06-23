import React from "react";
import { useState } from "react";
import { FaUserNurse,FaUserMd } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import CONSTANT from "../Constant";



function SingleContainer(props){
    const [style,setStyle]=useState({display:"flex",minHeight:"20vh",width:"40vw",marginTop:"5vh",borderRadius:"0.5rem",
    border:"solid gray 0.01rem"});
    const [answer,setAnswer]=useState();
    const [textarea,setTextarea]=useState();
    const send=async()=>{
        const data=props["data"];
        data['answer']=textarea;
        console.log(JSON.stringify(data))
        fetch(
            CONSTANT.SERVER.URL+"set/answer",
            {   method:"PUT",
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt"),
                    body:JSON.stringify(data)
                    }
            })
    }
    let iconValue;
    if(props["data"]["fromUser"]['role']==="nurse"){
        iconValue=<FaUserNurse style={{width:"10vw",height:"10vh",color:"#FA86C4"}}/>
    }else if (props["data"]["fromUser"]['role']==="doctor"){
        iconValue=<FaUserMd style={{width:"10vw",height:"10vh",color:"#52B2BF"}}/>
    }else if(props['data']["fromUser"]['role']==="pharmacy"){
        iconValue=<MdLocalPharmacy style={{width:"10vw",height:"10vh",color:"#4CBB17"}}/>
    }
        

    //1px 1px 5px red
    return(
    <div style={style}>
        <div style={{borderRight:"solid gray 0.01rem"
        ,width:"10vw",minHeight:"20vh",marginRight:"2vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
            {iconValue}
        </div>
        <div style={{textAlign:"left",paddingTop:"2vh",paddingRight:"2vw",paddingBottom:"2vh"}}>
            <span style={{fontWeight:"bold"}}>{"From: "}</span><span>{props["data"]['fromUser']['email']}</span> 
            <p>
                <span style={{fontWeight:"bold"}}>{"Question: "}</span>
                {props['data']['message']}
            </p>
            {answer?
                <div >
                    <span style={{fontWeight:"bold"}}>{"Answer: "}</span>
                    <textarea placeholder="Your Reply" value={textarea}style={{width:"20vw",minHeight:"8vh"}} className="tecTextarea"
                        onChange={
                            (e)=>{setTextarea(e.target.value)}
                        } ></textarea>
                    <button onClick={()=>{}} style={{color:"white",backgroundColor:"#388292",border:"none",width:"5vw",height:"5vh",
                        borderRadius:"5vh",marginLeft:"20vw",marginTop:"2vh"}} onClick={send}>Send</button>
                </div>:
                <button style={{color:"white",backgroundColor:"#388292",border:"none",width:"5vw",height:"5vh",
                    borderRadius:"5vh"}} onClick={()=>{
                        setAnswer(true);
                         setStyle({...style,boxShadow:"1px 1px 5px red"})}}>Answer</button>}
        </div>

        

    </div>)
}
export default SingleContainer