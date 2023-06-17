import React, { useEffect, useState } from "react";
import "./home.css"
import CONSTANT from "../Constant";
import HomePage from "./HomePage";
import FirstTimePasswordChange from "../FirstTimePasswordChange/FirstTimePasswordChange";
import Loading from "../loading/loading";


function HomeController(props){

    const[controller,setController]=useState([<Loading/>]);
    const getApiData = async () => {
        const response = await fetch(
            
            CONSTANT.SERVER.URL+"get/actvitylog",
            {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    }
            }
        ).then((response) => response.json());
        if(isNaN(response) ){
            setController([<HomePage logout={props.logout} />]);
        }else{
            setController([<FirstTimePasswordChange logout={props.logout}/>]);
        }
        
      };

      useEffect(() => {
        getApiData();
      },[]);
      return(
        <div>{controller}</div>
        
      )
 
 }
export default HomeController;