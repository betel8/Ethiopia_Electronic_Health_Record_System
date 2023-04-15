import React from "react";
import CONSTANT from "../Constant";
import { useState } from "react";
function FirstTimeLoggedIn(props){
    const[newPassword,setNewPassword]=useState("")
    const onSubmitHandler=()=>{
        const token=sessionStorage.getItem("jwt");
        const temp={
            "email":props.userEmail,
            "password":newPassword
        }
        fetch(CONSTANT.SERVER.URL+"changePassword",
            {
                method: 'PUT',
                headers: {
                'Content-Type':'application/json',
                'Authorization' : token},
                body:JSON.stringify(temp)
            }).then(response=>{
                if(response.ok){
                    alert("okey")
                }else{
                    alert("notokeu")
                }
            }).catch(er=>console.log(er));

    }
    return(
        <div className="FirstTimeLoggedIn">
            <form onSubmit={onSubmitHandler()} className="firstTimeLoggedInForm">
                <input type="text" className="newPassword" name="newPassword"/>
                <label htmlFor="newPassword"></label>
                <button type="submit">Change Password</button>
            </form>
            
        </div>
    );
}
export default FirstTimeLoggedIn;