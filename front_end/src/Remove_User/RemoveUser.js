import React, { useState } from "react";
import './removeUser.css';
import { GrFormClose } from "react-icons/gr";
import CONSTANT from "../Constant";
import DoctorList from "./DoctorList";
import Search from "../SearchBar/searchBar";
import ConfirmDeletion from "./ConfirmDeletion";
import RemoveHCP from "./RemoveHCP";

function RemoveUser(props){
    const[user,setUser]=useState();
    const[controller,setController]=useState([]);
    const[searchValue,setSearchValue]=useState();
    const submit=async (email) => {
        await fetch(
            CONSTANT.SERVER.URL+"suspend/user?email="+email ,
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
                return(<DoctorList email={element.email} fname={element["personalDetail"]["fName"]} 
                    lname={element["personalDetail"]["lName"]} onClickHandler={onClickHandler}/>)
            })
            setUser(tmp);
        }else{
            setUser(null)
        }
       
       
        
      };
    const HandlerChange=(e)=>{
        setSearchValue(e.target.value);
        getUser(e.target.value);
    }
    if(props.pageTitle==="HCP"){
        return(<RemoveHCP  pageTitle={props.pageTitle} close={props.close}/>)

    }else{
        if(!isNaN(controller)){
            return(
                <section className="RemoveUser" >
                    <div className='add_user_Title'>
                        <h2>Suspend {props.pageTitle}</h2>
                        <div className='addDoctorClose' onClick={()=>{props.close(false,"home")}}><GrFormClose size={30}/></div>
                    </div>
                    <h3>Enter UserName or Id you want to suspend</h3>
                    <div className='searchButton'>
                        <Search  handleChange={HandlerChange} value={searchValue} pageTitle="remove"/>
                    </div>
                <div  className="list">
                    <ul style={{display:"flex",position:"relative",padding:0, margin:0,listStyle:"none",fontWeight:"bold"}}>
                        <li style={{position:"relative",width:"15vw",fontWeight:"bold",fontSize:"medium"}}>Email</li>
                        <li style={{position:"relative",width:"10vw",fontWeight:"bold",fontSize:"medium"}}>First Name</li>
                        <li style={{position:"relative",width:"10vw",fontWeight:"bold",fontSize:"medium"}}>Last Name</li>
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
    
}
export default RemoveUser;