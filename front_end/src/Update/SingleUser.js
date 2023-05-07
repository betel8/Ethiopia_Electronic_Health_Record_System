import { RiUser2Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";

import SingleInputContainer from '../SharedComponents/SingleInputContainer';
import Warning from "../SharedComponents/warning";
import CONSTANT from "../Constant";

function SingleUser(props){
    return(
        <div>
            <ul style={{display:'flex'}}>
    <li><RiUser2Fill style={{width:'10vw',height:'10vh'}}/></li>
    <li><input value='Full Name'/><AiFillEdit/></li>
</ul>
<ul style={{display:'flex'}}>
    <li><input value='Status'/><AiFillEdit/></li>
    <li><input value='Cell Phone'/><AiFillEdit/></li>
    <li><input value='Email'/><AiFillEdit/></li>

</ul>

        </div>
        );
    }
    export default SingleUser