import React from "react";
import './SearchBar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import SingleActivityLog from "../activityLog/SingleActivityLog";
import SingleSearch from "./siingleSearch";
function Search(props){
    return(
      <div>
    <div className='searchContainer'>
      <input type='search' placeholder='Search' className='headerSearchInput' />
      <div className='searchIcon'>
      <AiOutlineSearch style={{color:'#0067b8',background:'transparent' ,
    height:'2rem',width:'2rem'}}/>
      </div>  </div>
      <div className="menu"><div>
      <SingleSearch/>
        </div></div>
      
      </div>);
}
export default Search 