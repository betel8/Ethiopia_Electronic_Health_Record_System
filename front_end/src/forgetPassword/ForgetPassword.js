import image from '../image/forget.png'
import Warning from '../SharedComponents/warning';
import SingleInputContainer from '../SharedComponents/SingleInputContainer';
import CONSTANT from '../Constant';

function ForgetPassword(){
    const submit=(email)=>{
      //fetch(CONSTANT.SERVER.URL+"forgetPassword?")
    }
    const {handler,handleSubmit,intergratedValue}=Warning(CONSTANT.ForgetPassword,submit);  
    const forgetValue=intergratedValue.map((value)=>(
    <SingleInputContainer name={value.name} type={value.type} handler={handler} onchange={onchange} label={value.label} 
    error={value.error} required={value.required} validationType={value.validationType} />))
      return(
          <div className="FirstTimeLoggedIn">
          <form onSubmit={handleSubmit}style={{display:"flex"}} className="firstTimeLoggedInForm">
                   
                <img src={image} style={{height:'70vh'}} className="logo" alt="change password big "/>
               
          <div className="main" style={{marginTop:"25vh" , marginLeft:'10vw'}}> 
                  <h1>Forget Password</h1>
                  <p>Enter the email address associated with your account and we'll send you a link to reset your password </p>
                  
                   <div className="forget" >
                    
                  {forgetValue[0]}
                  </div>

                   <button style={{ marginLeft:"4vh"}}id="buttons" type="submit">Continue</button>
                 
                 <a href="#" style={{ marginTop:"5vh", float:"right"}}>Login Instead</a>
                 </div>
                  
              </form>
  
          
           
      </div>
      )
  }
  export default ForgetPassword;