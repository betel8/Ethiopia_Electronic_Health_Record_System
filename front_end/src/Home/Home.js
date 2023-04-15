import React from "react";
import "./home.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useState } from "react";
import AddUser from "../Add_User/AddUser"
import RemoveUser from "../Remove_User/RemoveUser";
import CONSTANT from "../Constant";
import ContentBox from "./ContentBox";

function Home(props){
    const token=sessionStorage.getItem("jwt")
    fetch(CONSTANT.SERVER.URL+"get/actvitylog?email="+props.username,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization':token
          }
    }).then(response=>response.json())
    .then(data=>{
        if(data){

        }else{

        }
    })




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
            {contentBoxs}
        </section>
        <Footer/>
        </section>
    );


}

export default Home;