import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useState } from "react";
import AddUser from "../Add_User/AddUser";
import RemoveUser from "../Remove_User/RemoveUser";
import ContentBox from "./ContentBox";
import CONSTANT from "../Constant";
import ActivityContainer from "../ActivityMonitor/ActivityContainer";
import ActivityLog from "../activityLog/activityLog";

function HomePage(props){
    const contents=CONSTANT.homeContent;
    const [transformHandler,setTransformHandler]=useState("");
    const [transformType,setTransformType]=useState("");
    const Transform=(value,type,remove)=>{
        if(value===true){
            setTransformHandler("handler");
            if(remove){
                setTransformType(<RemoveUser pageTitle={type} close={Transform}/>);
            }else{
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
        <Header pageTitle={"Home"} logout={props.logout}/>
        <section className="homeContent">
            <div style={{display:"flex"}}>
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