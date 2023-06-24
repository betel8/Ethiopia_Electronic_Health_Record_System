import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleActivity from "../ActivityMonitor/SingleActivity";
import CONSTANT from "../Constant";
import Loading from "../loading/Loading";
import { FaRedoAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import {GrFormClose} from "react-icons/gr";
import SingleContainer from "./SingleContainer";




function HireEmployee(props){
    
    const [isLoading,setIsLoading]=useState(true);
    const [employees,setEmployees]=useState([]);
    const [searchValue,setSearchValue]=useState("");
    const [numberEmployee,setNumberEmployee]=useState();
    const [Active,setActive]=useState(0)

    const getEmployee = async () => {
       
        const response = await fetch(
            CONSTANT.SERVER.URL+"search/employee?value="+searchValue,
            {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    }
            }
        ).then((response) => response.json());
            setIsLoading(false);
            if(isNaN(response) ){
                let tempActive=0;
                    const tem=response.map((element)=>{
                        if(element['status']===true){
                            tempActive=+1;
                        }
                       return(<SingleContainer name={element['personalDetail']['fName']+" "+element['personalDetail']['lName']}
                        role={element["role"]} email={element['email']} phone={element['personalDetail']['cellPhone1']}
                        hire={element['works']} status={element['status']} refresh={getEmployee}/>) 
                    })
                    setNumberEmployee(response.length);
                    setEmployees(tem)
                    setActive(tempActive)
            }else{
                setEmployees(<h1 style={{
                    padding:"2% 0",
                    textAlign:"center",
                    width:"100%",
                    fontSize:"2rem",
                    color:"#DDD"
                }}>No Match Found</h1>)
            }
        
      };



    useEffect(() => {
        getEmployee(searchValue);
      }, []);
    return(
        <div className="hireEmployees">
        <div className="activityContainer" style={{padding:"0"}} >
            { isLoading && <Loading/> }
            <div className="sub-header" style={{textAlign:"center",alignItems:"center"}}>
                <h4 style={{paddingLeft:"2vw"}}> Hire / Monitor Employees</h4>
                <div className={searchValue?"monitorSearchValue monitorSearch":"monitorSearch"} style={{marginLeft:"10vw"}}>
                    <input type="search" placeholder="Search with Email" className='searchInput'value={searchValue} 
                        onChange={(e)=>{setSearchValue(e.target.value);getEmployee()} }/>
                    <AiOutlineSearch className='searchIcon' />
                </div>

                <div className="refreshBox" onClick={()=>{getEmployee()}}>
                    <FaRedoAlt  size={"0.8rem"} />
                    < span style={{fontSize:"small"}}> Refresh</span>
                </div>
                <div className='addDoctorClose' style={{top:"0vh"}}onClick={()=>{props.close(false,"home",null)}}>
                    <GrFormClose style={{ fontSize: '2rem' }}/>
                </div>
                
            </div>
            <div style={{height:"15vh",width:"57vw",backgroundColor:"#f0f2f5",padding:"0 10vw",display:"flex",alignItems:"center"}}>
                <h3 style={{fontWeight:"bold", padding:0,margin:0,color:"#aaaa",marginLeft:"5vw"}}>Total Employees : {numberEmployee}</h3>
                <h3 style={{fontWeight:"bold", padding:0,margin:0,color:"#aaaa", marginLeft:"15vw"}}>Active Employees : {Active}</h3>
                
            </div>
            <div style={{backgroundColor:"#f0f2f5",width:"57vw",height:"50vh",padding:"0 10vw 10vh 10vw",display:"flex",flexWrap:"wrap"}}>
                            {employees}
        </div>
        </div>  
        </div>
    );
}
export default HireEmployee;