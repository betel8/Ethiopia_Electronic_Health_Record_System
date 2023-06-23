import React from "react";
import CONSTANT from "../Constant";
import { GrStatusGoodSmall } from "react-icons/gr";

function SingleContainer(props){
    let spanStyle={width:"4vw",textAlign:"center",
    justifyContent:"center",color:"white",padding:"0.5vh 0.5vw",fontSize:"small",backgroundColor:"#39ff14",
    borderRadius:"2vh",marginBottom:"1vh"};
    const iconColor=props.status?"#65fe08":"gray";
    const hireEmployees=async()=>{
        await fetch(
            CONSTANT.SERVER.URL+"hire/employee?value="+props.email,
            {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    },
                method:"PUT"
            }
        )
        props.refresh();
    }
    const fire=async()=>{
        await fetch(
            CONSTANT.SERVER.URL+"fire/employee?value="+props.email,
            {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    },
                method:"PUT"
            }
        )
        props.refresh();
    }
    if(props.role==="doctor"){
        spanStyle={...spanStyle,backgroundColor:"#52B2BF"}
    }else if(props.role==="nurse"){
        spanStyle={...spanStyle,backgroundColor:"#FA86C4"}
    }else{
        spanStyle={...spanStyle,backgroundColor:"#4CBB17"}
    }
  

    return(<div style={{width:"15vw",height:"20vh", backgroundColor:"white",
        position:"relative",paddingLeft:"1vw",paddingTop:"1vh",display:"flex",paddingRight:"1vw",
        flexDirection:"column",marginRight:"2vw"}}>
        {isNaN(props.hire)?<span style={{position:"absolute",right:"1vw" ,top:"1vh",margin:0,padding:0}}><GrStatusGoodSmall color={iconColor} 
        style={{width:"1vw",height:"1vh"}}/></span>:""}
        <span style={spanStyle}>{props.role==="doctor"?"Doctor":props.role==="nurse"?"Nurse":"Pharmacist"}</span>
        <span style={{fontWeight:"bold"}}>{props.name}</span>
        <span style={{fontSize:"small",color:"gray"}}>{props.phone}</span> 
        <span style={{fontSize:"small",color:"gray"}}>{props.email}</span>  
        {
            !isNaN(props.hire)?<button style={{height:"4vh",width:"4vw", borderRadius:"0.5vh", border:"none",position:"absolute",right:"1.5vw",
            bottom:"1vh",color:"white",backgroundColor:"#388292"}} onClick={hireEmployees} >Hire</button>
            :<button style={{height:"4vh",width:"4vw", borderRadius:"0.5vh", border:"none",position:"absolute",right:"1.5vw",
            bottom:"1vh",color:"white",backgroundColor:"#DA2C43"}} onClick={fire} >Fire</button>
        }
        
    </div>)
}
export default SingleContainer;