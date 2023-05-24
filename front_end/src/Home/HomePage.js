import React, { useEffect } from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useState } from "react";
import AddUser from "../Add_User/addUser";
import RemoveUser from "../Remove_User/RemoveUser";
import ContentBox from "./ContentBox";
import CONSTANT from "../Constant";
import ActivityContainer from "../ActivityMonitor/ActivityContainer";
import ActivityLog from "../activityLog/activityLog";
import Profile from "../profile/profile";
import ChangePassword from "../ChangePassword/ChangePassword";
import Update from "../Update/Update";

function HomePage(props){
    const contents=CONSTANT.homeContent;
    const [transformHandler,setTransformHandler]=useState("");
    const [transformType,setTransformType]=useState("");
    const getUser=async(arg)=>{
        const response = await fetch(
            CONSTANT.SERVER.URL+"get/user",
            {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    }
            }
        ).then((response) => response.json());
        if(arg){
            setTransformType(<Profile close={Transform} user={response} getUser={getUser} />) 
        }else{
            
            setTransformType(<Update close={Transform} user={response}/>)
        }
    }
    const Transform=(value,type,controller)=>{
        if(value===true){
            if(controller){
                if(type==="profile"){
                    setTransformHandler("ProfileHandler")
                    getUser(true);
                    
                }else if(type==="changePassword"){
                    setTransformHandler("handler")
                    setTransformType(<ChangePassword close={Transform}/>)

                }else if(type==="update"){
                    setTransformHandler("handler")
                    getUser(false)
                }else{
                    setTransformHandler("handler");
                    setTransformType(<RemoveUser pageTitle={type} close={Transform}/>);
                }
                
            }else{
                setTransformHandler("handler");
                setTransformType(<AddUser pageTitle={type} close={Transform}/>);
            }
            
        }else{
            setTransformHandler("");
            setTransformType("")
        }
    }
    const contentBoxs=contents.map((content)=>{
        return (<ContentBox
        img={content.img}
        to={content.to}
        Handler={Transform}/>);
    });


    return(
        <section className="homePage">
        <div className={transformHandler} >{transformType}</div>
        <Header pageTitle={"Home"} logout={props.logout} transform={Transform}/>
        <section className="homeContent">
            <div style={{display:"flex" ,marginBottom:"1vh"}}>
                <ActivityContainer/>  
                <ActivityLog/>
            </div>
            <div style={{display:"flex"}}>{contentBoxs}</div>
        </section>
        <Footer/>
        </section>
    );

}
export default HomePage;