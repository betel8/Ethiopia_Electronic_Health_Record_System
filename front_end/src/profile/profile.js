import { useEffect, useState } from 'react'
import './profile.css'
import image from '../image/login.jpg'
import {RiMenuUnfoldLine, RiSettings2Line} from 'react-icons/ri'
import {TbGenderBigender} from 'react-icons/tb'
import {AiOutlineIdcard,AiOutlinePhone} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import CONSTANT from '../Constant'
import UpdateInputContainer from '../SharedComponents/UpdateInputContainer'
import UpdateWarning from '../SharedComponents/UpdateWarning'


function Profile(props){
    const addInputValue=props.user.role==="doctor"?
    CONSTANT.Doctor:props.user.role==="nurse"?CONSTANT.Nurse:CONSTANT.Pharmacist;
    const [isOpen, setIsOpen] = useState(true);

    const submit=(user)=>{
        
          const token=sessionStorage.getItem("jwt");
      
          fetch(CONSTANT.SERVER.URL+'put/user',{
            method:'PUT',
            headers:{
              'Content-Type':'application/json',
              'Authorization':token},
            body: JSON.stringify(user)
          }).then(response=>{
            if(response.ok){
              alert('all ok')
            }else{
              console.log(JSON.stringify(user))
            }
          }).catch(err=>alert(err))
        }
    const[isExpand,setIsExpand]=useState(false);
    const {intergratedValue,handler,handleSubmit} = UpdateWarning(addInputValue,submit,props.user); 
    const updateInputs=intergratedValue.map((value)=>{
        return(<UpdateInputContainer name={value.name} type={value.type} handler={handler} options={value.options}
            label={value.label} error={value.error} required={value.required} validationType={value.validationType} 
            value={value.value} close={props.getUser} submit={handleSubmit} />)
    }) 
    return (
        <div className={isOpen?'sidebar':"sidebarClose"}>
        <div className='profile'>
                    <RiMenuUnfoldLine  onClick={()=>{setIsOpen(!isOpen);window.setTimeout(props.close,500,false,false,false)}}className="sidebar-toggle" 
                    style={{position:"absolute",left:'0',top:"1vh"}}/>
                    <img src={image} alt="" className='profileImage'/>
                    <label>{props.user.personalDetail.fName+" "+props.user.personalDetail.lName}</label>
                    <label >{props.user.email}</label>
                </div>
                <div  className="profileContainer"style={{backgroundColor:"white"}}>
                <table className='profileList' >
                    <tr >
                        <td><AiOutlineIdcard style={{width:"3vw",height:"3vh"}}/></td>
                        <td><label>Id:</label></td>
                        <td><input className='id' type='text' value={props.user.id} disabled={true}/></td>
                    </tr>
                    <tr>
                        <td><AiOutlinePhone style={{width:"3vw",height:"3vh"}}/></td>
                        <td><label>Cell-Phone:</label></td>
                        <td>{updateInputs[2]}</td>
                    </tr>
                    <tr>
                        <td><TbGenderBigender style={{width:"3vw",height:"3vh"}}/> </td>
                        <td><label>Gender:</label></td>
                        <td>{updateInputs[10]}</td>
                    </tr>
                    <tr>
                        <td>  <GoLocation style={{width:"3vw",height:"3vh"}}/> </td>
                        <td><label>Address:</label></td>
                        <td>{updateInputs[4]}</td>
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
                                    <li onClick={()=>{props.close(true,"update",true)}}>More</li>
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
    )

}

export default Profile

  
 
        