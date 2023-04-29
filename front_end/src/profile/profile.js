import { useEffect, useState } from 'react'
import './profile.css'
import {HiMenu} from 'react-icons/hi'
import image from '../image/login.jpg'
import {RiMenuUnfoldLine,RiLockPasswordLine} from 'react-icons/ri'
import {TbGenderBigender} from 'react-icons/tb'
import {AiOutlineIdcard,AiOutlinePhone,AiFillEdit} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'


function Profile(props){
      const [isOpen, setIsOpen] = useState(true);
      
      
      
    return(
        <div className={isOpen?'sidebar':"sidebarClose"}>
        <div className='profile'>
                    <RiMenuUnfoldLine  onClick={()=>{setIsOpen(!isOpen);window.setTimeout(props.close,1000,false,false,false)}}className="sidebar-toggle" 
                    style={{position:"absolute",left:0,top:"1vh"}}/>
                    <img src={image} alt="" className='profileImage'/>
                    <label>Tigist Yegezu</label>
                    <label >Tgyegezu@gmail.com</label>
                </div>
                <div  style={{backgroundColor:"white"}}>
                <table>
                    <tr className='profileList'>
                        <td><AiOutlineIdcard/></td>
                        <td><label>Id:</label></td>
                        <td><input className='id' type='number' value='1234569' /></td>
                    </tr>
                    <tr className='profileList'>
                        <td><AiOutlinePhone/></td>
                        <td><label>Cell-Phone:</label></td>
                        <td><input type='text' value='(+251)-960-160-991'/></td>
                        <td><AiFillEdit/></td>
                    </tr>
                    
                </table>
                <div className='profileList'> 
                    <label></label>
                </div>
                <div className='profileList'>
                    <TbGenderBigender/> 
                    <label>Gender:</label>
                    <input className='gender' type='text' value='Female'/>
                    <AiFillEdit/>
                </div>
                <div className='profileList'>
                    <GoLocation/><label>Adress:</label>
                    <input className='address' type='text' value='Addis Ababa, Ethiopia'/>
                    <AiFillEdit/>
                </div>
                <div className='profileList'>
                    <RiLockPasswordLine/><label>Change <br/>Password:</label>
                    <input className='password' value='123456789' type='password' /><AiFillEdit/>
                </div>
                <div>
                <button  className='logout'>LOG OUT</button></div> 
    </div>
    </div>
    )
}

export default Profile

  
 
        