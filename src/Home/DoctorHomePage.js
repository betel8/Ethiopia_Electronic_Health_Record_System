import React from "react";
import "./DoctorHomePage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PatientRecord from "../patientRecord/patientRecord";

function DoctorHomePage(props){
return(
    <section className="DoctorHomePage">
    <div className=""></div>
        <Header pageTitle={"Home"} />
    <section className="homeContent">
        <button onClick={()=>{props.Transform(true,"Patient",false)}}>add Patient</button>
    </section>
    <Footer/>
    </section>
)
}

export default DoctorHomePage;