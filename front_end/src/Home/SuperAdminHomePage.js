import React, { useEffect } from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import ContentBox from "./ContentBox";
import CONSTANT from "../Constant";
import ActivityContainer from "../ActivityMonitor/ActivityContainer";
import ActivityLog from "../activityLog/activityLog";

function SuperAdminHomePage(props){
    const contents=CONSTANT.homeContent;

    const contentBoxs=contents.map((content)=>{
        return (<ContentBox
        img={content.img}
        to={content.to}
        Handler={props.Transform}/>);
    });


    return(
        <section className="homePage">
        <Header pageTitle={"Home"} logout={props.logout} Transform={props.Transform}/>
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
export default SuperAdminHomePage;