import React, { useEffect, useState } from "react";
import CONSTANT from "../Constant";
import { GrStatusGoodSmall } from "react-icons/gr";
function OneActivity (props){
    const [activityLog,setActivityLog]=useState([]);
    const getUser = async () => {
        const response = await fetch(
            CONSTANT.SERVER.URL+"get/activity?value="+props.email ,
            {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    }
            }
        ).then((response) => response.json());
        setActivityLog(response);
    }
    useEffect(()=>{getUser()},[]);
    if(isNaN(activityLog)){
        return(
            < div className="singleActivityContainer"style={{display:"flex", height:"7vh",justifyContent:"center",flexDirection:"column"}}>
                <ul className="singleActivity">
                    <li style={{width:"10vw" ,fontSize:"medium",fontWeight:"bold"}}>{props.name}</li>
                    <li style={{width:"15vw",fontSize:"medium"}}>{props.email}</li>
                    <li style={{width:"10vw",fontSize:"medium"}}>{props.phone}</li>
                    <li style={{width:"4vw" ,fontSize:"medium"}}>{props.status? <GrStatusGoodSmall color="green" size={"0.8rem"} style={{marginLeft:"1vw"}}/>
                    :<GrStatusGoodSmall color="gray" size={"0.8rem"} style={{marginLeft:"1vw"}}/>}</li>
                    <li style={{width:"20vw"}}>
                        <ul style={{margin:0,padding:0}}>
                            <li style={{fontSize:"small"}}>{props.activity}</li>
                            <li style={{fontSize:"smaller",fontWeight:"bold",position:"relative"}}>{activityLog["subject"]}
                            <span style={{right:"1vw" ,position:"absolute",fontWeight:"lighter",fontStyle:"italic"}}>{activityLog.activityTime}</span></li>
                        </ul>
                    </li>      
                </ul>
            </div>
        );
    }
    
}
export default OneActivity