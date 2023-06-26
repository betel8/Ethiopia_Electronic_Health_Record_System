import React from "react";
import Header from "../Header/Header";
import ActivityLog from "../activityLog/activityLog";
import ActivityContainer from "../ActivityMonitor/ActivityContainer";
import Footer from "../Footer/Footer";
import CONSTANT from "../Constant";
import ContentBox from "./ContentBox";
function AdminHomePage(props){
    let counter=0;
    const contentBoxs=CONSTANT.homeContent.map((content)=>{
        counter=counter+1;
        if(counter===4){
            return ""
        }else
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
    )
}
export default AdminHomePage