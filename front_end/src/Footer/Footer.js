import React from "react";
import './footer.css';
function Footer (props){
        //const [loginStatus,setLoginStatus]=useState(1);
        return(
            <footer className={props.pageTitle==="Login"?"mainFooter2":"mainFooter"}>
                <span className="footerContent">
                    <ul >Contact Us
                        <li><a href="https://www.facebook.com/EthiopiaFMoH/">FaceBook</a></li>
                        <li><a href="mailto: betel.ameha@gmail.com">Email</a></li>
                        <li>Phone:(+251)-9-1144-8312</li>
                        {props.pageTitle==="Login"?<li className="Link"onClick={()=>{props.pageHandler(2)}}>About us</li>:""
                        }
                        

                    </ul>
                    <ul>Ministry of health
                        <li><a href="https://www.moh.gov.et/site/node/35">WebSite</a></li>
                        <li><a href="https://www.facebook.com/EthiopiaFMoH/">FaceBook</a></li>
                        <li><a href="mailto: info@moh.gov.et">Email</a></li>
                        <li>Phone:(+251)-11-5517-011</li>
                    </ul>
                </span>
                
                <span className={props.pageTitle==="Login"?"copy2":"copy"}><span dangerouslySetInnerHTML={{ "__html": "&copy;" }}/>Copy Right  2023</span>
            </footer>
        );
    }
export default Footer;