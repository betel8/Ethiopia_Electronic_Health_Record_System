import React from "react";
import './home.css'
import Header from '../Header/Header'
import Footer from "../Footer/Footer";


function Home(props){
return(
    <section className="homePage">
    <Header pageTitle={"Home"}/>
    <section className="homeContent">
        <ContentBox contentTitle={"helloworld"}/>
    </section>
    <Footer/>
    </section>
);
}
function ContentBox(props){
    return(
    <div className="singleContent">
        <label>{props.contentTitle}</label>
        <img src="" alt="icon"/>
    </div>);
}

export default Home;