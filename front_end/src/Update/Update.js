
import SingleUser from "./UpdateUser";
import { GrFormClose } from "react-icons/gr";

function Update(props){
   
        return(
            <div style={{backgroundColor:"white"}}>
                <div className="sub-header" >
                    <h3 style={{padding:0,margin:"0 0 0 1vw",color:"#4682b4"}}>Change Personal Detail</h3>
                    <div className='addDoctorClose' style={{top:"0vh"}} onClick={()=>{props.close(false,"home")}}>
        <GrFormClose style={{ fontSize: '2rem' }}/></div>
                </div> 
                <div  >
                    <SingleUser user={props.user} close={props.close} />

                </div>
            </div>
            );
  
}
export default Update