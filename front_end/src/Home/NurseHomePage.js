import React from "react";
import "./DoctorHomePage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PatientRecord from "../patientRecord/patientRecord";

function NurseHomePage(props){
return(
    <section className="NurseHomePage">
    <div className=""></div>
        <Header pageTitle={"Home"} Transform={props.Transform} />
    <section className="homeContent">
        <button onClick={()=>{props.Transform(true,"Patient",false)}}>add Patient</button>
    </section>
        <Footer pageTitle={"healthcare"} controller={props.controller} Transform={props.Transform}/>
    </section>
)
}

export default NurseHomePage;