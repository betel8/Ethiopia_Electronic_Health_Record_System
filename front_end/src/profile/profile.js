import { useState } from 'react'
import './profile.css'
import {HiMenu} from 'react-icons/hi'
import image from '../image/login.jpg'
import {RiMenuUnfoldLine,RiLockPasswordLine} from 'react-icons/ri'
import {TbGenderBigender} from 'react-icons/tb'
import {AiOutlineIdcard,AiOutlinePhone,AiFillEdit} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
function Profile(){
    
      const [isOpen, setIsOpen] = useState(false);
      const sidebarHandler = () => setIsOpen(!isOpen);
     
    return(
<div> 
<div className={`sidebar ${isOpen ? "open" : ""}`}>

        <img className='pp' src={image} alt='' onClick={sidebarHandler}/> 
         
            {isOpen ?  <RiMenuUnfoldLine  onClick={sidebarHandler}
            className="sidebar-toggle "/>:  <HiMenu  onClick={sidebarHandler}
            className="sidebar-toggle "/>}
       
              
         
            <div className='profile'>
<img src={image} alt="" className='profileImage'/>
<label>Tigist Yegezu</label>
<label >Tgyegezu@gmail.com</label>

</div>
<          div className='profileList'>
        
        <AiOutlineIdcard/> <label>User Id:</label>
         <input className='id' type='number' value='1234569' /><AiFillEdit/></div>
     
        <div className='profileList'>
        
        <AiOutlinePhone/><label>Cell-Phone:</label>
         <input type='text' value='(+251)-960-160-991'/><AiFillEdit/>
         </div>
        <div className='profileList'>
        <TbGenderBigender/> <label>Gender:</label>
        <input className='gender' type='text' value='Female'/><AiFillEdit/>
       </div>
       <div className='profileList'>
        <GoLocation/><label>Adress:</label>
        <input className='address' type='text' value='Addis Ababa, Ethiopia'/><AiFillEdit/>
       
    </div>
    <div className='profileList'>
        <RiLockPasswordLine/><label>Change <br/>Password:</label>
        <input className='password' value='123456789' type='password' /><AiFillEdit/>
       
    </div>
    <div>
      <button  className='logout'>LOG OUT</button></div> 
        </div>
        
</div>
    );
}
export default Profile

  
 
        