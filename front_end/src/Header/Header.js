import './header.css';
import React from 'react';
import logo from '../image/logo_without_s.png'
import Search from '../SearchBar/searchBar';
import { HiMenu } from 'react-icons/hi';
import CONSTANT from '../Constant';

function Header (props){
    if(props.pageTitle==="About us")
        return(<AboutUsHeader pageHandler={props.pageHandler}/>);
        else if (props.pageTitle==="Home")
        return(<HomeHeader transform={props.transform}/>);
        else if(props.pageTitle==="FirstTimeLoggedIn")
        return(<FirstTimeLoggedInHeader/>)
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
        <span>Profile</span>
        </div>
        </header>
    )
}
function FirstTimeLoggedInHeader(){
    return(    
    <header className='HomeHeader'>
    <div className='leftContent'>
            <img src={logo} alt='EEHRS log' width='10' height='10' className='logo'/>           
            <span className='CompanyName'>EEHRS</span>
            <hr className='vertical'/>  
            <span className='pageTitle'>Home</span>
    </div>
    <div className='rightContent'>
      
        </div>
    </header>)

}

function HomeHeader(props){
    const logout=async()=>{
        await fetch(
            CONSTANT.SERVER.URL+"user/logout",
            {   method:"PUT",
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':sessionStorage.getItem("jwt")
                    }
            }
        )
        sessionStorage.removeItem('jwt'); 
        window.location.reload();
    }
return(
    <header className='HomeHeader'>
    <div className='leftContent'>
            <img src={logo} alt='EEHRS log' width='10' height='10' className='logo'/>           
            <span className='CompanyName'>EEHRS</span>
            <hr className='vertical'/>  
            <span className='pageTitle'>Home</span>
            <Search pageTitle={props.pageTitle}/>
    </div>
    <div className='rightContent'>
        <span className='Log out' type="submit" onClick={()=>{logout() }}>
            Log Out
        </span>
        <HiMenu style={{marginLeft:"1vw",width:"2vw",height:"4vh"}} onClick={()=>props.transform(true,"profile",true)}/>
        </div>
    </header>
)
}


export default Header;