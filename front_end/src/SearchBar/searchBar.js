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

      if(user["role"]==="doctor"||user["role"]==="nurse"){
        const response = await fetch(
          CONSTANT.SERVER.URL+"search/patient?value="+value,
          {
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':sessionStorage.getItem("jwt")
                  }
          }
      ).then((response) => response.json()).catch(e=>{
        sessionStorage.removeItem('jwt'); 
        window.location.reload();});
        if(isNaN(response)){
        let tem=response.map((element)=>{
          return(<SingleSearch fname={element["fName"]} mname={element["mname"]} lname={element["lname"]} 
          role={"patient"} Transform={props.Transform} id={element["id"]}/>)
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
          return(<SingleSearch email={element["email"]} Transform={props.Transform}
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
    },[]);
    const closeList=()=>{
      setSearch([]); setDesplayClass("");setFocus("headerBorder");
    }
    if(user!=null)
    return(
      <div className='searchContainer' onBlur={()=>{window.setTimeout(closeList,150)}}>
        <input type='search' placeholder={user['role']==='admin'||user['role']==='superAdmin'?
          "Enter Email":"Enter Name"} className={'headerSearchInput '+focus} onChange={(e)=>{
            props.pageTitle!=="remove"?onChange(e.target.value):props.handleChange(e)}} 
        value={props.pageTitle==="remove"?props.value:searchValue} />
        <div className='searchIcon' >
          <AiOutlineSearch style={{color:'#0067b8',background:'transparent' ,
            height:'2rem',width:'2rem'}}/>
        </div>
        <div className={displayClass} onClick={(e)=>{setSearch([]); closeList()}} >{search}</div>
      </div>);
}
export default Search 
//onBlur={(e)=>{setSearch([]); setDesplayClass("");setFocus("headerBorder");}}