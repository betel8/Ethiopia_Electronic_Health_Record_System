import React, { useEffect, useState } from "react";
import "./home.css"
import CONSTANT from "../Constant";
import HomePage from "./HomePage";
import FirstTimePasswordChange from "./FirstTimePasswordChange";

function HomeController(props){
    

    const[controller,setController]=useState();

    const getApiData = async () => {
        const response = await fetch(
            CONSTANT.SERVER.URL+"get/actvitylog?id="+sessionStorage.getItem('ID'),
            {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    }
            }
        ).then((response) => response.json());
    
        setController(response);
      };

      useEffect(() => {
        getApiData();
      }, []);
    if(controller==null){
        return(<HomePage logout={props.logout}/>);
    }else{
        return(<FirstTimePasswordChange/>)
    }
            
        
    




    

}


export default HomeController;