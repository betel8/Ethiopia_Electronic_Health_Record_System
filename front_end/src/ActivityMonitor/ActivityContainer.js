import React, { useEffect, useState } from "react";
import './activityMonitor.css';
import SingleActivity from "./SingleActivity";
import { FaRedoAlt } from 'react-icons/fa';
import Loading from "../Loading/Loading";
import CONSTANT from "../Constant";
import Search from "../SearchBar/searchBar";
function ActivityContainer(props) {
    const [isLoading,setIsLoading]=useState(true);
const[variableName,setVariableName] =useState(1);    
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
                    return (<SingleActivity name={value.user.fname+" "+value.user.lname} email={value.user.email} 
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
const handleSearch=()=>{
    return(
    <div style={{marginTop:'-5vh'}}>
            <Search /></div>);
}
    
    return (
        <div className="activityContainer" >
            {/* {isLoading&&<Loading/>} */}
            <div className="sub-header">
                <h4>Employee Activity Monitor</h4>
                <div className="refreshBox" onClick={()=>{getActivity()}}>
                    <FaRedoAlt  size={"0.8rem"} />
                    <span style={{fontSize:"small"}}> Refresh</span>
                </div>
            </div>
            <div style={{display:'flex'}}>
            <div className="divClass" onClick={()=>{setVariableName(1)}} >
                <span  style={{color: variableName===1 ? 'blue' : 'gray'}}> All</span>
                 <hr color={variableName===1 ? 'blue' : '#D3D3D3'} className="hrClass"/>
            </div>
            <div className="divClass" onClick={()=>{setVariableName(2)}} >
                <span style={{color: variableName===2 ? 'blue' : 'gray'}}>Active</span>
               <hr color={variableName===2 ? 'blue' : '#D3D3D3'} className="hrClass"/>
           </div>
           <div className="divClass" onClick={()=>[setVariableName(3) ,handleSearch()]}  >
            
                <span style={{color: variableName===3 ? 'blue' : 'gray'}}>Other</span>
                <hr color={variableName===3 ? 'blue' : '#D3D3D3'} className="hrClass"/>
                 </div>
        </div>
          
      
        
        <hr color="#D3D3D3" style={{margin:"0 0 1vh 0"}}/>
       
            <div id="scrolls-style" style={{backgroundColor:"white"}}>
            <ul style={{display:"flex",position:"relative",padding:"0rem ",margin:0}}>
                <li style={{position:"relative",width:"10vw"}}>Name</li>
                <li style={{position:"relative",width:"15vw"}}>Email</li>
                <li style={{position:"relative",width:"10vw"}}>Phone</li>
                <li style={{position:"relative",width:"4vw"}}>Status</li>
                <li style={{position:"relative",width:"20vw"}}>Last Activity</li>
            </ul>
  
            <div className="activityBox">
               {Activitys}
            </div>
            </div>
        </div>
    );
}
export default ActivityContainer;