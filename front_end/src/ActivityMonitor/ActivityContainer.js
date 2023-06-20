import React, { useEffect, useState } from "react";
import './activityMonitor.css';
import SingleActivity from "./SingleActivity";
import { FaRedoAlt } from 'react-icons/fa';
import { AiOutlineSearch } from "react-icons/ai";
import Loading from "../Loading/Loading";
import CONSTANT from "../Constant";
import Search from "../SearchBar/searchBar";
import SuperAdminHomePage from "../Home/SuperAdminHomePage";
function ActivityContainer(props) {
    const [value,setValue]=useState();
    const getUser=async()=>{
        const response = await fetch(
            CONSTANT.SERVER.URL+"get/user",
            {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    }
            }
        ).then((response) => response.json());
        if(response["role"]==="superAdmin"){
            setValue(<AdminActivity/>);}
        else if(response["role"]==="doctor")
            setValue(<DoctorActivityContainer/>)

    }
    useEffect(()=>{getUser()},[])
        return(<div>{value}</div>)
}
function AdminActivity(){
    const [isLoading,setIsLoading]=useState(true);
    const[variableName,setVariableName] =useState(1);    
    const[Activitys,setActivitys]=useState([]);
    const [searchValue,setSearchValue]=useState("");
    

    const getActivity = async (arg) => {
        const response = await fetch(
            CONSTANT.SERVER.URL+"admin/activity/search?value="+searchValue,
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
                        if(arg===1){       
                            return (<SingleActivity name={value.personalDetail.fName+" "+value.personalDetail.lName} email={value.email} 
                            phone={value.personalDetail.cellPhone1} status={value.status} /> )
                        }else if(arg===2){
                                if(value.status)           
                                    return (<SingleActivity name={value.personalDetail.fName+" "+value.personalDetail.lName} email={value.email} 
                                    phone={value.personalDetail.cellPhone1} status={value.status} /> )
                                else return null;
                        }else{
                            if(value.status===false)
                            return (<SingleActivity name={value.personalDetail.fName+" "+value.personalDetail.lName} email={value.email} 
                            phone={value.personalDetail.cellPhone1} status={value.status} /> )
                            else return null
                        }
                })
                setActivitys(tem)
            }else{
                setActivitys(<h1 style={{
                    padding:"2% 0",
                    textAlign:"center",
                    width:"100%",
                    fontSize:"2rem",
                    color:"#DDD"
                }}>No Match Found</h1>)
            }
        
      };
      useEffect(() => {
        getActivity(variableName);
      }, []);

    
    return (
        <div className="activityContainer" >
            { isLoading && <Loading/> }
            <div className="sub-header">
                <h4>Employee Activity Monitor</h4>

                <div className="refreshBox" onClick={()=>{getActivity(variableName)}}>
                    <FaRedoAlt  size={"0.8rem"} />
                    < span style={{fontSize:"small"}}> Refresh</span>
                </div>
            </div>
            <div className={searchValue?"monitorSearchValue monitorSearch":"monitorSearch"}>
                <input type="search" placeholder="search" className='searchInput'value={searchValue} 
                onChange={(e)=>{setSearchValue(e.target.value);
                    getActivity(1);
                    setVariableName(1);} }/>
                <AiOutlineSearch className='searchIcon' />
            </div>
            <div style={{display:'flex'}}>
            <div className="divClass" onClick={()=>{setVariableName(1);getActivity(1);}} >
                < span  style={{color: variableName===1 ? 'blue' : 'gray'}}> All</span>
                 <hr color={variableName===1 ? 'blue' : '#D3D3D3'} className="hrClass"/>
            </div>
            <div className="divClass" onClick={()=>{setVariableName(2);getActivity(2)}} >
                <span style={{color: variableName===2 ? 'blue' : 'gray'}}>Active</span>
               <hr color={variableName===2 ? 'blue' : '#D3D3D3'} className="hrClass"/>
           </div>
           <div className="divClass" onClick={()=>{setVariableName(3); getActivity(3)} }  >
            
                <span style={{color: variableName===3 ? 'blue' : 'gray'}}>Other</span>
                <hr color={variableName===3 ? 'blue' : '#D3D3D3'} className="hrClass"/>
                 </div>
        </div>
          
      
        
        <hr color="#D3D3D3" style={{margin:"0 0 1vh 0"}}/>
       
            <div  style={{backgroundColor:"white"}}>
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
function DoctorActivityContainer(){
    
    const [isLoading,setIsLoading]=useState(true);
    const [variableName,setVariableName] =useState(1);    
    const [Activitys,setActivitys]=useState([]);
    const [searchValue,setSearchValue]=useState("");
    const getActivity = async (arg) => {
        const response = await fetch(
            CONSTANT.SERVER.URL+"admin/activity/search?value="+searchValue,
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
                        if(arg===1){       
                            return (<SingleActivity name={value.personalDetail.fName+" "+value.personalDetail.lName} email={value.email} 
                            phone={value.personalDetail.cellPhone1} status={value.status} /> )
                        }else if(arg===2){
                                if(value.status)           
                                    return (<SingleActivity name={value.personalDetail.fName+" "+value.personalDetail.lName} email={value.email} 
                                    phone={value.personalDetail.cellPhone1} status={value.status} /> )
                                else return null;
                        }else{
                            if(value.status===false)
                            return (<SingleActivity name={value.personalDetail.fName+" "+value.personalDetail.lName} email={value.email} 
                            phone={value.personalDetail.cellPhone1} status={value.status} /> )
                            else return null
                        }
                })
                setActivitys(tem)
            }else{
                setActivitys(<h1 style={{
                    padding:"2% 0",
                    textAlign:"center",
                    width:"100%",
                    fontSize:"2rem",
                    color:"#DDD"
                }}>No Match Found</h1>)
            }
        
      };
      useEffect(() => {
        getActivity(variableName);
      }, []);

    
    return (
        <div className="activityContainer" style={{width:"50vw"}}>
            { isLoading && <Loading/> }
            <div className="sub-header">
                <h4>Hospital Admission</h4>

                <div className="refreshBox" onClick={()=>{getActivity(variableName)}}>
                    <FaRedoAlt  size={"0.8rem"} />
                    < span style={{fontSize:"small"}}> Refresh</span>
                </div>
            </div>
            <div className={searchValue?"monitorSearchValue monitorSearch":"monitorSearch"}>
                <input type="search" placeholder="search" className='searchInput'value={searchValue} 
                onChange={(e)=>{setSearchValue(e.target.value);
                    getActivity(1);
                    setVariableName(1);} }/>
                <AiOutlineSearch className='searchIcon' />
            </div>
            <div style={{display:'flex'}}>
            <div className="divClass" onClick={()=>{setVariableName(1);getActivity(1);}} >
                < span  style={{color: variableName===1 ? 'blue' : 'gray'}}> All</span>
                 <hr color={variableName===1 ? 'blue' : '#D3D3D3'} className="hrClass"/>
            </div>
            <div className="divClass" onClick={()=>{setVariableName(2);getActivity(2)}} >
                <span style={{color: variableName===2 ? 'blue' : 'gray'}}>Active</span>
               <hr color={variableName===2 ? 'blue' : '#D3D3D3'} className="hrClass"/>
           </div>
           <div className="divClass" onClick={()=>{setVariableName(3); getActivity(3)} }  >
            
                <span style={{color: variableName===3 ? 'blue' : 'gray'}}>Other</span>
                <hr color={variableName===3 ? 'blue' : '#D3D3D3'} className="hrClass"/>
                 </div>
        </div>
          
      
        
        <hr color="#D3D3D3" style={{margin:"0 0 1vh 0"}}/>
       
            <div  style={{backgroundColor:"white"}}>
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
    )
}

export default ActivityContainer