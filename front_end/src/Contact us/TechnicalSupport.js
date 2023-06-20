import React, { useEffect, useState } from "react";
import './TechnicalSupport.css'
import image from '../image/contact.jpg'
import Header from "../Header/Header";
import {FaPhoneAlt} from 'react-icons/fa'
import CONSTANT from "../Constant";
import { AiOutlineSend } from "react-icons/ai";
import {FaComments} from 'react-icons/fa'
 function TechnicalSupport(props){
  const [value,setValue]=useState();
  const getUser=async()=>{
    const response = await fetch(
        CONSTANT.SERVER.URL+"get/user",
        {
            headers:{
                'Content-Type':'application/json',
                'Authorization':sessionStorage.getItem("jwt")
                }
        }
    ).then((response) => response.json());
      setValue(response)
  }
useEffect(()=>{getUser()},[])
return(
    <section className="contactUS">
      <Header pageTitle={"Technical Support"} Transform={props.Transform}/>
      <div className="Title" >
          <div style={{display:"block"}}>
          <h1>Get In Touch</h1>
          <p>Want to get in touch? We'd love to hear from you.</p>
          </div>
          <img src={image} alt=""/>
      </div>
      <div style={{display:"flex"}}>
      <div className="ContactUSMessage">
          <FaComments className="phoneIcon"/>
          <p>{value?"Hi "+value["personalDetail"]["fName"]+" "+value["personalDetail"]["lName"]+
          ", how can we help you ?":""}</p>
          <div className="messageInput">
            <div className="massageInputContainer">
              <textarea cols="40" rows="8"  required className="messageInput"> </textarea>
            </div>
          </div>
          <button type="submit">Contact Us <AiOutlineSend/></button>
        </div>
        <div className="callUs">
          <FaPhoneAlt className="phoneIcon"/>
          <p>If you have any question, please feel free to </p> 
          <span id='p2'>call us . we will answer immedietly</span>
          <p id="phone">(+251)987654321</p>
        </div>
        
      </div>
  </section>
);
 }
 export default TechnicalSupport