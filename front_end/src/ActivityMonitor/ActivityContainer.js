import React, { useEffect, useState } from "react";
import './activity.css';
import SingleActivity from "./SingleActivity";
import { FaRedoAlt } from 'react-icons/fa';
import Loading from "../Loading/Loading";
import CONSTANT from "../Constant";
function ActivityContainer(props) {
    const [isLoading,setIsLoading]=useState(true);
    
    const[Activitys,setActivitys]=useState([]);

    const getActivity = async () => {
        const response = await fetch(
            CONSTANT.SERVER.URL+"get/actvitylog?id="+sessionStorage.getItem('ID'),
            {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    }
            }
        ).then((response) => response.json());
            setIsLoading(false);
            if(isNaN(response) ){
                let tem=response.map(value=>{
                    return (<SingleActivity name={value.user.fName+" "+value.user.lName} email={value.user.email} 
                    phone={value.user.cellPhone1} status={true} activity={value.description} activityTitle={value.subject}
                    time={value.activityTime} /> )
                })
                setActivitys(tem)
            }else{
                
            }
        
      };
      useEffect(() => {
        getActivity();
      }, []);

    
    return (
        <div className="activityContainer">
            {isLoading&&<Loading/>}
            <div className="sub-header">
                <h4>Employee Activity Monitor</h4>
                <div className="refreshBox" onClick={()=>{getActivity()}}>
                    <FaRedoAlt  size={"0.8rem"} />
                    <span style={{fontSize:"small"}}> Refresh</span>
                </div>
            </div>
            <div style={{backgroundColor:"white"}}>
            <ul style={{display:"flex",position:"relative",padding:"0rem ",margin:0}}>
                <li style={{position:"relative",width:"10vw"}}>Name</li>
                <li style={{position:"relative",width:"15vw"}}>Email</li>
                <li style={{position:"relative",width:"10vw"}}>Phone</li>
                <li style={{position:"relative",width:"4vw"}}>Status</li>
                <li style={{position:"relative",width:"20vw"}}>Last Activity</li>
            </ul>
  
            <div className="activityBox" id="scroll-style">
               {Activitys}
            </div>
            </div>
        </div>
    );
}
export default ActivityContainer;