import { useEffect, useState } from 'react'
import './profile.css'
import image from '../image/login.jpg'
import {RiMenuUnfoldLine, RiSettings2Line} from 'react-icons/ri'
import {TbGenderBigender} from 'react-icons/tb'
import {AiOutlineIdcard,AiOutlinePhone,AiFillEdit} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import CONSTANT from '../Constant'
import Loading from '../loading/loading'
import UpdateInputContainer from '../SharedComponents/UpdateInputContainer'


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
    useEffect(()=>{getUser()
    },[]) 
    const[isExpand,setIsExpand]=useState(false);

    if(!isNaN(user)) return(<div><Loading/></div>)
    else 
    return ((
        <div className={isOpen?'sidebar':"sidebarClose"}>
        <div className='profile'>
                    <RiMenuUnfoldLine  onClick={()=>{setIsOpen(!isOpen);window.setTimeout(props.close,500,false,false,false)}}className="sidebar-toggle" 
                    style={{position:"absolute",left:'0',top:"1vh"}}/>
                    <img src={image} alt="" className='profileImage'/>
                    <label>{user.personalDetail.fName+" "+user.personalDetail.lName}</label>
                    <label >{user.email}</label>
                </div>
                <div  className="profileContainer"style={{backgroundColor:"white"}}>
                <table className='profileList' >
                    <tr >
                        <td><AiOutlineIdcard style={{width:"3vw",height:"3vh"}}/></td>
                        <td><label>Id:</label></td>
                        <td><input className='id' type='text' value={user.id}/></td>
                    </tr>
                    <tr>
                        <td><AiOutlinePhone style={{width:"3vw",height:"3vh"}}/></td>
                        <td><label>Cell-Phone:</label></td>
                        <td><UpdateInputContainer value={user.personalDetail.cellPhone1} change={setUser} 
                        name={"cellPhone1"} close={getUser}/></td>
                    </tr>
                    <tr>
                        <td><TbGenderBigender style={{width:"3vw",height:"3vh"}}/> </td>
                        <td><label>Gender:</label></td>
                        <td><input className='gender' type='text' value={user.personalDetail.gender}/></td>
                        <td><AiFillEdit/></td>
                    </tr>
                    <tr>
                        <td>  <GoLocation style={{width:"3vw",height:"3vh"}}/> </td>
                        <td><label>Address:</label></td>
                        <td><input className='address' type='text' value={user.personalDetail.city}/></td>
                        <td><AiFillEdit/></td>
                    </tr>
                    <tr>
                        <td><RiSettings2Line style={{width:"3vw",height:"3vh"}} /></td>
                        
                        <td>
                            <label for="touch" className='dropDown'>Setting</label> 
                        </td>
                        <td style={{position:"relative"}}>
                            <ul class="slide">
                                < li onClick={()=>{setIsExpand(!isExpand)}}>{isExpand?"-":"+"}</li>
                                {isExpand&&<div>
                                    <div className='setting'>
                                    <li onClick={()=>{props.close(true,"changePassword",true)}}>Change Password</li> 
                                    <li>More</li>
                                    </div>
                                    </div>}
                                
                            </ul>
                        </td>
                    </tr>
                     
                </table>
                <div>  </div>
               
               
                <button  className='logout' onClick={()=>{sessionStorage.removeItem('jwt'); window.location.reload();}}>LOG OUT</button>
    </div> 
    </div>
    ))
}

export default Profile

  
 
        