import React from "react";
import "./DoctorHomePage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../SharedComponents/Sidebar (2)";
import ActivityContainer from "../ActivityMonitor/ActivityContainer";
import ActivityLog from "../activityLog/activityLog";

function DoctorHomePage(props){
return(
    <section className="homePage">
    <div className=""></div>
        <Header pageTitle={"Home"} Transform={props.Transform}  />
    <section className="homeContent">
        <div style={{display:"flex"}}>
            <Sidebar Transform={props.Transform}/>
            <ActivityContainer pageTitle="doctor"/>
            <ActivityLog pageTitle="doctor"/>
        </div>
        
    </section>
    <Footer pageTitle={"healthcare"} controller={props.controller} Transform={props.Transform} getApiData={props.getApiData}/>
    </section>
)
}

export default DoctorHomePage;