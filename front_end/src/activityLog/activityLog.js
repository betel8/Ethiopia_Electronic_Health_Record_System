import React from "react";
import './activityLog.css'
import SingleActivityLog from "./SingleActivityLog";
import CONSTANT from "../Constant";
import { useState,useEffect } from "react";
function ActivityLog(){  
    const [isLoading,setIsLoading]=useState(true);
    const[variableName,setVariableName] =useState(1);   
    
    const[Activitys,setActivitys]=useState([]);
    const getActivity = async () => {
        const response = await fetch(
            CONSTANT.SERVER.URL+"get/actvitylog",
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
        <div className="">
            <h4>My Activity</h4>
        </div> 
        <div style={{display:'flex'}}>
            <div className="divClass" onClick={()=>{setVariableName(1)}} >
                <span  style={{color: variableName===1 ? 'blue' : 'gray'}}> All</span>
                 <hr color={variableName===1 ? 'blue' : '#D3D3D3'} className="hrClass"/>
            </div>
            <div className="divClass" onClick={()=>{setVariableName(2)}} >
                <span style={{color: variableName===2 ? 'blue' : 'gray'}}>Own Account</span>
               <hr color={variableName===2 ? 'blue' : '#D3D3D3'} className="hrClass"/>
           </div>
           <div className="divClass" onClick={()=>{setVariableName(3)}}  >
            
                <span style={{color: variableName===3 ? 'blue' : 'gray'}}>Other</span>
                <hr color={variableName===3 ? 'blue' : '#D3D3D3'} className="hrClass"/>
                 </div>
        </div>
          
      
        
        <hr color="#D3D3D3" style={{margin:"0 0 1vh 0"}}/>
        <div className="activityLogs" id="scrolls-style">
        {Activitys}
        </div>
    </div>
    );
}
export default ActivityLog