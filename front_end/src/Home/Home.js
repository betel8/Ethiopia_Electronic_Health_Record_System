import React from "react";
import "./home.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Doctor from "../image/add doctor.png"
import Nurse from "../image/add nurse.png"
import Pharmacist from "../image/add pharmacist.png"
import Admin from "../image/add admin.png"
import HCP from "../image/add HCP.png"
import { useState } from "react";
import AddUser from "../Add_User/addUser"
import RemoveUser from "../Remove_User/RemoveUser";

function Home(props){
    const contents=[{
        "to":"Doctor",
        "img":Doctor
    },{
        "to":"Nurse",
        "img":Nurse
    },{
        "to":"Pharmacist",
        "img":Pharmacist
    },{
        "to":"Admin",
        "img":Admin
    },{
        "to":"Health Care Provider",
        "img":HCP
    }];
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
        <Header pageTitle={"Home"}/>
        <section className="homeContent">
            {contentBoxs}
        </section>
        <Footer/>
        </section>
    );


}

function ContentBox(props){
    return(
    <div className="singleContent">
        
        <img src={props.img} alt="icon" className="contentImg"/>
        <h4>Manage {props.to}</h4>
        <div className="buttonContainer">
            <hr/>
            <div className="contentDiv"><div className="description" onClick={()=>{props.Handler(true,props.to,false)}}>Add {props.to}</div><div className="arrow">&gt;</div></div>
            <hr/>
            <div className="contentDiv"><div className="description" onClick={()=>{props.Handler(true,props.to,true)}}>Remove {props.to}</div><div className="arrow">&gt;</div></div>
        </div>
        
    </div>);
}

export default Home;