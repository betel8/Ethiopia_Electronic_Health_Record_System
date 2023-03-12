import './header.css';
import React from 'react';
import logo from '../image/logo_without_s.png'

class Header extends React.Component{
    render(){
        return(
            <header className='mainHeader'>
                <div className='leftContent'>
                    <img src={logo} alt='EEHRS log' width='10' height='10' className='logo'/>           
                    <span className='CompanyName'>Ethiopia Electronic Health Record System</span>
                    <hr className='vertical'/>  
                    <span className='pageTitle'>{this.props.pageTitle}</span>
                </div>
                <div className='rightContent'>
                    <span className='signin'>Sign in</span>
                </div>
                
            </header>
        );
    }
}
export default Header;