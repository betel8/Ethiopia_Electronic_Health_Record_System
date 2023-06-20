import React, { useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import "./searchBar"
function SingleSearch (props){
    let iconValue;
    if(props.role==="nurse"){
        iconValue=<FaUserNurse style={{width:"3vw",color:"#FA86C4"}}/>
    }else if (props.role==="admin" || props.role==="superAdmin" ){
        iconValue=<FaUserShield style={{width:"3vw",color:"#D6B85A"}}/>
    }else if (props.role==="doctor"){
        iconValue=<FaUserMd style={{width:"3vw",color:"#52B2BF"}}/>
    }else if(props.role==="pharmacy"){
        iconValue=<MdLocalPharmacy style={{width:"3vw",color:"#4CBB17"}}/>
    }
    return(
        <div className="singleSearchValue" >
                {iconValue}
                <h5 style={{padding:0,margin:0}}>{props.fname+" "+props.lname}</h5>
        </div>
    );
}
export default SingleSearch