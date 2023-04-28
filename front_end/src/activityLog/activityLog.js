import React from "react";
import './activityLog.css'
import SingleActivityLog from "./SingleActivityLog";
import CONSTANT from "../Constant";
import { useState,useEffect } from "react";
function ActivityLog(){
    
        
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
                    return (<SingleActivityLog time={value.activityTime} description={value.description} subject={value.subject} /> )
                })
                setActivitys(tem)
            }else{
                
            }
        
      };
      useEffect(() => {
        getActivity();
      }, []);

    return(
    <div className="activityLogContainer">
        <div className="sub-header">
            <h4>My Activity</h4>
        </div> 
        <div className="activityLogs" id="scrolls-style">
        {Activitys}
        </div>
    </div>
    );
}
export default ActivityLog