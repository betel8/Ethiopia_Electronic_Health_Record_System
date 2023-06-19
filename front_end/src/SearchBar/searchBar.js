import React, { useState } from "react";
import './SearchBar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import SingleSearch from "./singleSearch";
import CONSTANT from "../Constant";
function Search(props){
  const [search,setSearch]=useState([]);
  const [displayClass,setDesplayClass]=useState("");
  const [focus,setFocus]=useState("headerBorder")
  const getSearch = async (value) => {
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
            return(<SingleSearch fname={element["personalDetail"]["fName"]} lname={element["personalDetail"]["lName"]}/>)
          })
          setSearch(tem);
      }else{
        setSearch(<div><h6 style={{padding:0,margin:0,paddingTop:"0.5vh",color:"#aaa"}}>No Match Found</h6></div>);
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
    return(
      <div className='searchContainer'>
        <input type='search' placeholder='Search  with email' className={'headerSearchInput '+focus} onChange={(e)=>onChange(e.target.value)} 
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