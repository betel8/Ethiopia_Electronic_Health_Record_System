import React, { useEffect, useState } from "react";
import "./home.css"
import CONSTANT from "../Constant";
import SuperAdminHomePage from "./SuperAdminHomePage";
import FirstTimePasswordChange from "../FirstTimePasswordChange/FirstTimePasswordChange";
import Loading from "../loading/Loading";
import AdminHomePage from "./AdminHomePage";
import PharmacistHomePage from "./PharmacistHomePage";
import DoctorHomePage from "./DoctorHomePage";
import Profile from "../profile/profile";
import ChangePassword from "../ChangePassword/ChangePassword";
import Update from "../Update/Update";
import AddUser from "../Add_User/addUser";
import RemoveUser from "../Remove_User/RemoveUser";
import HireEmployee from "../HireEmployee/HireEmployee";
import TechnicalSupportAdminSide from "../Contact us/TechnicalSupportAdminSide";
function HomeController(props){
    const [controller,setController]=useState([<Loading/>]);
    const [transformHandler,setTransformHandler]=useState("");
    const [transformType,setTransformType]=useState("");
    const getUser=async(arg)=>{
      const response = await fetch(
          CONSTANT.SERVER.URL+"get/user",
          {
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':sessionStorage.getItem("jwt"),
                  }
          }
      ).then((response) => response.json());
      if(arg){
          setTransformType(<Profile close={Transform} user={response} getUser={getUser} />) 
      }else{
          
          setTransformType(<Update close={Transform} user={response}/>)
      }
    }
    const Transform=(value,type,controller)=>{
        if(value===true){
            if(controller){
                if(type==="profile"){
                    setTransformHandler("ProfileHandler")
                    getUser(true);
                    
                }else if(type==="changePassword"){
                    setTransformHandler("handler")
                    setTransformType(<ChangePassword close={Transform}/>)

                }else if(type==="update"){
                    setTransformHandler("handler")
                    getUser(false)
                }else{
                    setTransformHandler("handler");
                    setTransformType(<RemoveUser pageTitle={type} close={Transform}/>);
                }
                
            }else{
                if(type==="HireEmployee"){
                  setTransformHandler("handler");
                  setTransformType(<HireEmployee close={Transform}/>)
                }else if(type==="tecSupport"){
                  setTransformHandler("")
                  setController(<TechnicalSupportAdminSide/>)
                }else{
                  setTransformHandler("handler");
                  setTransformType(<AddUser pageTitle={type} close={Transform}/>);
                }
            }
            
        }else{
            setTransformHandler("");
            setTransformType("")
        }
    }
    const getApiData = async () => {
        const response = await fetch(
          CONSTANT.SERVER.URL+"get/actvitylog",
            {   method:"Get",
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt"),
                    }
            }
        ).then((response) => response.json());
        if(Object.keys(response).length>1){
            if(response[0]["user"]["role"]==="superAdmin")
              setController([<SuperAdminHomePage Transform={Transform} />]);
            else if(response[0]["user"]["role"]==="admin")
              setController(<AdminHomePage Transform={Transform}/>)
            else if(response[0]["user"]["role"]==="pharmacist")
              setController(<PharmacistHomePage Transform={Transform}/>)
            else if(response[0]["user"]["role"]==="doctor")
              setController(<DoctorHomePage Transform={Transform} controller={setController} getApiData={getApiData}/>)
        }else{
            setController([<FirstTimePasswordChange/>]);
        }
        
      };

      useEffect(() => {
        getApiData();
      },[]);
      return(
        <div>
        <div className={transformHandler} >{transformType}</div>
          {controller}
        </div>
        
      )
 
 }
export default HomeController;