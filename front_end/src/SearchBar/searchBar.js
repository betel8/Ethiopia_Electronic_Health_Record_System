import React, { useEffect, useState } from "react";
import './SearchBar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import SingleSearch from "./singleSearch";
import CONSTANT from "../Constant";
function Search(props){
  const [search,setSearch]=useState([]);
  const [displayClass,setDesplayClass]=useState("");
  const [focus,setFocus]=useState("headerBorder");
  const [user,setUser]=useState();
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
      setUser(response)
  }
  const getSearch = async (value) => {

      if(user["role"]==="doctor"||user["role"]==="doctor"){
        const response = await fetch(
          CONSTANT.SERVER.URL+"search/patient?value="+value,
          {
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':sessionStorage.getItem("jwt")
                  }
          }
      ).then((response) => response.json());
        if(isNaN(response)){
          console.log(response);
        let tem=response.map((element)=>{
          return(<SingleSearch fname={element["fName"]} mname={element["mname"]} lname={element["lname"]} 
          role={"patient"}/>)
        })
        setSearch(tem);
      }else{
        setSearch(<div><h6 style={{padding:0,margin:0,paddingTop:"0.5vh",color:"#aaa"}}>No Match Found</h6></div>);
      }

      }else if(user['role']==="admin"||user['role']==="superAdmin"){
       const response = await fetch(
          CONSTANT.SERVER.URL+"search/user?value="+value,
          {
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':sessionStorage.getItem("jwt")
                  }
          }
      ).then((response) => response.json());
      if(isNaN(response)){
        let tem=response.map((element)=>{
          return(<SingleSearch fname={element["personalDetail"]["fName"]} lname={element["personalDetail"]["lName"]} 
          role={element["role"]}/>)
        })
        setSearch(tem);
      }else{
        setSearch(<div><h6 style={{padding:0,margin:0,paddingTop:"0.5vh",color:"#aaa"}}>No Match Found</h6></div>);
      }
    
  }


  };
    const[searchValue,setSearchValue]=useState("");
    function onChange(arg){
      setSearchValue(arg);
      if(arg!==""){
        getSearch(arg)
        setDesplayClass("menu");
        setFocus("headerFocus")
      }else{
        setSearch("")
        setDesplayClass("");
        setFocus("headerBorder");
        
      }
      

    }
    useEffect(()=>{
      getUser();
    },[])

    if(user!=null)
    return(
      <div className='searchContainer'>
        <input type='search' placeholder={user['role']==='admin'||user['role']==='superAdmin'?
          "Search with Email":"Search with Name"} className={'headerSearchInput '+focus} onChange={(e)=>onChange(e.target.value)} 
        value={searchValue} onBlur={(e)=>{setSearch([]); setDesplayClass("");
        setFocus("headerBorder");}}/>
        <div className='searchIcon' >
          <AiOutlineSearch style={{color:'#0067b8',background:'transparent' ,
            height:'2rem',width:'2rem'}}/>
        </div>
        <div className={displayClass}>{search}</div>
      </div>);
}
export default Search 