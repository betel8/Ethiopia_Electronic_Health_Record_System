import React from "react";
import Header from "../Header/Header";
import { useEffect } from "react";
import Loading from "../loading/Loading";
import { useState } from "react";
import CONSTANT from "../Constant";
import SingleContainer from "./SingleContainer";

function TechnicalSupportAdminSide(){
    const [content,setContent]=useState(<Loading/>)
    const getContent=async()=>{
        const response=await fetch(
            CONSTANT.SERVER.URL+"get/all/support",
            {   method:"GET",
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    }
            }
        ).then(response=>response.json())
        if(isNaN(response)){
            const tem=response.map((el)=>{
                console.log(el)
                return(<SingleContainer data={el}/>)
            })
        setContent(tem)    
        }
        
       
        
        
    }
    useEffect(()=>{getContent()},[])
    return(
        <section className="TecAdmin">
            <Header pageTitle="Technical Support"/>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:"5vh"}}>
                    {content}
                </div>
            
        </section>
    )
}
export default TechnicalSupportAdminSide;