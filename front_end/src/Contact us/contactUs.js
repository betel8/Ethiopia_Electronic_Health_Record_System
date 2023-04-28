import React from "react";
import './contactUs.css'
import image from '../image/contact.jpg'

import Header from "../Header/Header";
import {FaPhoneAlt} from 'react-icons/fa'

import {FaComments} from 'react-icons/fa'
 function ContactUs(){

    return(
        <div className="contactUS">
                <Header pageTitle={"Home"}/>
        <div className="Title" >
           <div style={{display:"block"}}>
            <h1>Get In Touch</h1>
            <p>Want to get in touch? We'd love to hear from you.</p>
            </div>
            <img src={image} alt=""/>
        </div>
      <div style={{display:"flex"}}>
        <div className="callUs">
            <FaPhoneAlt className="phoneIcon"/>
        <p>If you have any question, please feel free to </p> 
           <span id='p2'>call us . we will answer immedietly</span>
           <p id="phone">(+251)987654321</p>
        </div>
        <div className="message">

<FaComments className="phoneIcon"/>
<p>Send message </p>
<div id="float-label">
                <input type="text" style={{marginLeft:" 1vw",
   marginRight:" 1vw" , width :"40%", display: "flex"}} /><br/>
                <label >Full Name</label>
 
              </div>
              <div id="float-label">
              <input type="email" style={{marginLeft:" 1vw",
   marginRight:" 1vw" , width :"40%", display: "flex"}} /><br/>
                <label >Email</label>
                </div>
                <div className="messageInput">
                
                <div id="float-label">
                    
                <label >Message</label>
<textarea cols="40" rows="8"  require> </textarea>
              
                </div></div>
                <button>Submit</button></div>
        </div>
        </div>
    );
 }
 export default ContactUs