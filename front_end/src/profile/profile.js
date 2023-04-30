import { useEffect, useState } from 'react'
import './profile.css'
import image from '../image/login.jpg'
import {RiMenuUnfoldLine,RiLockPasswordLine, RiSettings2Line} from 'react-icons/ri'
import {TbGenderBigender} from 'react-icons/tb'
import {AiOutlineIdcard,AiOutlinePhone,AiFillEdit} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import CONSTANT from '../Constant'


function Profile(props){
    const [isOpen, setIsOpen] = useState(true);
    const [user,setUser]=useState([])
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
    useEffect(()=>{getUser()},[]) 
      
      
      
    return(
        <div className={isOpen?'sidebar':"sidebarClose"}>
        <div className='profile'>
                    <RiMenuUnfoldLine  onClick={()=>{setIsOpen(!isOpen);window.setTimeout(props.close,1000,false,false,false)}}className="sidebar-toggle" 
                    style={{position:"absolute",left:'0',top:"1vh"}}/>
                    <img src={image} alt="" className='profileImage'/>
                    <label>{user.fname+" "+user.lname}</label>
                    <label >{user.email}</label>
                </div>
                <div  className="profileContainer"style={{backgroundColor:"white"}}>
                <table className='profileList' >
                    <tr >
                        <td><AiOutlineIdcard style={{width:"3vw",height:"3vh"}}/></td>
                        <td><label>Id:</label></td>
                        <td><input className='id' type='text' value={user.id} /></td>
                    </tr>
                    <tr>
                        <td><AiOutlinePhone style={{width:"3vw",height:"3vh"}}/></td>
                        <td><label>Cell-Phone:</label></td>
                        <td><input type='text' value={user.cellPhone1}/></td>
                        <td><AiFillEdit/></td>
                    </tr>
                    <tr>
                        <td><TbGenderBigender style={{width:"3vw",height:"3vh"}}/> </td>
                        <td><label>Gender:</label></td>
                        <td><input className='gender' type='text' value={user.gender}/></td>
                        <td><AiFillEdit/></td>
                    </tr>
                    <tr>
                        <td>  <GoLocation style={{width:"3vw",height:"3vh"}}/> </td>
                        <td><label>Address:</label></td>
                        <td><input className='address' type='text' value={user.city}/></td>
                        <td><AiFillEdit/></td>
                    </tr>
                    <tr>
                        <div><td><RiSettings2Line style={{width:"3vw",height:"3vh"}} /></td>
                        </div>
                        <td>
                     <label for="touch"><p className='dropDown'>Setting</p></label>               
                     <input type="checkbox" id="touch"/>

                     <div class="slide">
                         <label>Change Password</label> 
                     </div></td>
                     </tr>
                </table>
               
               
                <button  className='logout'>LOG OUT</button>
                </div> 
    </div>
    )
}

export default Profile

  
 
        