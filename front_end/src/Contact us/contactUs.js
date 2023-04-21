import React from "react";
import './contactUs.css'
import image from '../image/contact.jpg'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {FaPhoneAlt} from 'react-icons/fa'

import {FaComments} from 'react-icons/fa'
 function ContactUs(){

    return(
        <div>
                <Header pageTitle={"Home"}/>
        <div className="Title" >
            <h1>Get In Touch</h1>
            <p>Want to get in touch? We'd love to hear from you.</p>
            <img src={image}/>
        </div>
      
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
                <input type="text"/><br/>
                <label >Full Name</label>
 
              </div>
              <div id="float-label">
              <input type="email"/><br/>
                <label >Email</label>
                </div>
                <div className="messageInput">
                
                <div id="float-label">
                    
                <label >Message</label>
<textarea cols="40" rows="8"  require> </textarea>
              
                </div></div>
                <button>Submit</button>
        </div>
        </div>
    );
 }
 export default ContactUs