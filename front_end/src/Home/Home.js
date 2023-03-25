import React from "react";
import "./home.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Doctor from "../image/add doctor.png"
import Nurse from "../image/add nurse.png"
import Pharmacist from "../image/add pharmacist.png"
import Admin from "../image/add admin.png"
import HCP from "../image/add HCP.png"


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
    const contentBoxs=contents.map((content)=>{
        return (<ContentBox
        img={content.img}
        to={content.to}/>);
    });
return(
    <section className="homePage">
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
            <div className="contentDiv"><div className="description">Add {props.to}</div><div className="arrow">&gt;</div></div>
            <hr/>
            <div className="contentDiv"><div className="description">Remove {props.to}</div><div className="arrow">&gt;</div></div>
        </div>
        
    </div>);
}

export default Home;