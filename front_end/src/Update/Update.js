
import SingleUser from "./UpdateUser";
import CONSTANT from "../Constant";
import { GrFormClose } from "react-icons/gr";

function Update(props){
   
        return(
            <div className="mainContainer" id="scrolls-style">
                <div className="sub-header">
                    <h4>Update User</h4>
                    <div className='addDoctorClose' onClick={()=>{props.close(false,"home")}}>
        <GrFormClose style={{ fontSize: '2rem' }}/></div>
                </div> 
                <div  >
                    <SingleUser user={props.user} close={props.close} />

                </div>
            </div>
            );
  
}
export default Update