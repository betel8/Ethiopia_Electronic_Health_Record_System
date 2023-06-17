import React, { useState } from "react";
import Search from "../SearchBar/searchBar";
import { GrFormClose } from "react-icons/gr";
import CONSTANT from "../Constant";
import HCPList from "./HCPList";
import ConfirmDeletion from "./ConfirmDeletion";


function RemoveHCP(props){
    const[user,setUser]=useState();
    const[searchValue,setSearchValue]=useState("");
    const[controller,setController]=useState([]);
   
    const submit=async (email) => {
        await fetch(
            CONSTANT.SERVER.URL+"suspend/?email="+email ,
            {   method:"PUT",
                headers:{
                    
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    }
            }
        )
        setController([])
    }
    const onClickHandler=(email)=>{
        setController(<ConfirmDeletion email={email} cancle={setController} submit={submit}/>)
    }
    const getUser = async (value) => {
        const response = await fetch(
            CONSTANT.SERVER.URL+"search/"+props.pageTitle+"/remove?value="+value ,
            {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    }
            }
        ).then((response) => response.json());
        if(isNaN(response)){
            const tmp=response.map((element)=>{
                return(<HCPList cName={element.companyName} owner={element.owner} 
                    phone={element.workPhone} onClickHandler={onClickHandler}/>)
            })
            setUser(tmp);
        }else{
            setUser(null)
        }}
        const HandlerChange=(e)=>{
            setSearchValue(e.target.value);
            getUser(e.target.value);
        }
    if(!isNaN(controller)){
        return(
            <section className="RemoveUser" >
            <div className='add_user_Title'>
                <h2>Suspend {props.pageTitle}</h2>
                <div className='addDoctorClose' onClick={()=>{props.close(false,"home")}}><GrFormClose size={30}/></div>
            </div>
            <h3>Enter UserName or Id you want to suspend</h3>
            <div className='searchButton'>
                <Search  handleChange={HandlerChange} value={searchValue}/>
            </div>
        <div  className="list">
            <ul style={{display:"flex",position:"relative",padding:0, margin:0,listStyle:"none",fontWeight:"bold"}}>
                <li style={{position:"relative",width:"15vw",fontWeight:"bold",fontSize:"medium"}}>Company Name</li>
                <li style={{position:"relative",width:"15vw",fontWeight:"bold",fontSize:"medium"}}>Owner</li>
                <li style={{position:"relative",width:"10vw",fontWeight:"bold",fontSize:"medium"}}>Phone</li>
            </ul>
            <hr width={"100%"} color={"grey"} height={"0.5vh"} style={{margin:0,padding:0}}/>
            {user}
            </div>
    
        </section>
        )
    }else{
        return(controller)
    }
    
}

export default RemoveHCP;