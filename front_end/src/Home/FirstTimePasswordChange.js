import React from "react"
import Header from "../Header/Header";
import CONSTANT from "../Constant";
import { useState } from "react";
function FirstTimePasswordChange(props){
    const [isConfirmed,setIsConfirmed]=useState("true");
    const [password,setPassword]=useState("changed")
    
    const onSubmitHandler=(e)=>{
        if (isConfirmed){
            const temp={
                "ID":sessionStorage.getItem("ID"),
                "password":password
            }
            fetch(CONSTANT.SERVER.URL+"changepassword",
                {
                    method: 'PUT',
                    headers: {
                    'Content-Type':'application/json',
                    'Authorization' : sessionStorage.getItem('jwt')
                    },
                    body:JSON.stringify(temp)
                }).then(response=>{
                    if(response.ok){
                        alert("okey")
                    }else{
                        alert("notokeu")
                    }
                }).catch(er=>console.log(er));

        }
    }
    const onChangeHandler=(e)=>{
        
    }
    const onBlurHandler=(e)=>{
        setPassword(e.target.value);
    }

    return(
        <div className="FirstTimeLoggedIn">
        <Header logout={props.logout} pageTitle={"Home"}/>
        <section>
            <form onSubmit={onSubmitHandler} className="firstTimeLoggedInForm">
                <input type="password" className="newPassword" name="newPassword" onChange={onChangeHandler} onBlur={onBlurHandler}/>
                <input type="password" className="confirmPassword" name="confirmPassword" onChange={onChangeHandler}
                onBlur={onBlurHandler}/>
                <label htmlFor="newPassword"></label>
                <button type="submit">Change Password</button>
            </form>
        </section>
         
    </div>
    )
}
export default FirstTimePasswordChange;