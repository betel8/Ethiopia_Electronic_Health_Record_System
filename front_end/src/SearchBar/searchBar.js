import React from "react";
import './SearchBar.css'
import {AiOutlineSearch} from 'react-icons/ai'
function Search(props){
    return(
    <div className='searchContainer'>
      <input type='search' placeholder='Search' className='headerSearchInput' />
      <div className='searchIcon'>
      <AiOutlineSearch style={{color:'#0067b8',background:'transparent' ,
    height:'2rem',width:'2rem'}}/>
      </div>
      
    </div>);
}
export default Search 