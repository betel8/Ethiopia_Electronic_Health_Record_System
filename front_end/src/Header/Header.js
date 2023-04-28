import './header.css';
import React from 'react';
import logo from '../image/logo_without_s.png'
import {AiOutlineSearch} from 'react-icons/ai'
import Search from '../SearchBar/searchBar';
function Header (props){
if(props.pageTitle==="About us")
return(<AboutUsHeader pageHandler={props.pageHandler}/>);
else if (props.pageTitle==="Home")
return(<HomeHeader/>);
else if(props.pageTitle==="add doctor")
return(<HomeHeader pageHandler={props.pageHandler}/>);
}

function AboutUsHeader(props){
    return(
        <header className='AboutHeader'>
        <div className='leftContent'>
            <img src={logo} alt='EEHRS log' width='10' height='10' className='logo'/>           
            <span className='CompanyName'>Ethiopia Electronic Health Record System</span>
            <hr className='vertical'/>  
            <span className='pageTitle'>About us</span>
        </div>
        <div className='rightContent'>
        <span className='signin' onClick={()=>{props.pageHandler(1)}}>Sign in</span>
        </div>
        </header>
    )
}

function HomeHeader(props){

return(
    <header className='HomeHeader'>
    <div className='leftContent'>
            <img src={logo} alt='EEHRS log' width='10' height='10' className='logo'/>           
            <span className='CompanyName'>EEHRS</span>
            <hr className='vertical'/>  
            <span className='pageTitle'>Home</span>
            <Search/>
    </div>
    <div className='rightContent'>
        <span className='Log out' type="submit" onClick={()=>{sessionStorage.removeItem('jwt'); window.location.reload(false); }}>Log Out</span>
        </div>
    </header>
)
}


function Search(props){
    return(
    <div className='searchContainer'>
      <input type='search' placeholder='Search' className='headerSearchInput' />
      <div className='searchIcon'>
      <AiOutlineSearch style={{color:'#0067b8',background:'transparent',borderTopRightRadius:'0.5rem',
    borderBottomRightRadius:'0.5rem'} } size={"2.5rem"}/>
      </div>
      
    </div>);
}

export default Header;