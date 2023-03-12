import './header.css';
import React from 'react';
import logo from '../image/logo_without_s.png'

function Header (props){

const signinAlter=(params)=>{
    if(params===true)
        return <span className='signin' onClick={props.pageholder}>Sign in</span>
    else
        return <span className='signin' >Home</span>
}
const search=(params)=>{
    if (params===true)
    return(<input type='search' placeholder='Search'/>);
        
}
return(
    <header className='mainHeader'>
        <div className='leftContent'>
            <img src={logo} alt='EEHRS log' width='10' height='10' className='logo'/>           
            <span className='CompanyName'>Ethiopia Electronic Health Record System</span>
            <hr className='vertical'/>  
            <span className='pageTitle'>{props.pageTitle}</span>
        </div>
        <div className='rightContent'>
            {signinAlter(true)}
        </div>
        
    </header>
);}

export default Header;