
import Header from "../Header/Header";
import image from '../image/forget.png'
import Warning from "../Add_User/warning";
import SingleInputContainer from "../Add_User/SingleInputContainer";

function Forget(){


const forget=[
  
    {
      'name':'email',
    'type':'email',
     'required':true,
     'validationType':'email',
      'label':'Email:' ,  
   }]
    
    const {handler,handleSubmit}=Warning(forget,"patient");  
      
      
      const forgetValue=forget.map((value,index)=>{
  
      return(<SingleInputContainer name={value.name} type={value.type} handler={handler} onchange={onchange} 
          label={value.label} error={value.error} required={value.required} validationType={value.validationType} />);
        })
      return(
          <div className="FirstTimeLoggedIn">
          {/* <Header logout={props.logout} pageTitle={"Home"}/> */}
      
          <form onSubmit={handleSubmit}style={{display:"flex"}} className="firstTimeLoggedInForm">
                    
                <img src={image} style={{height:'70vh'}} className="logo" alt="change password big "/>
                  <div className="main" style={{marginTop:"25vh" , marginLeft:'10vw'}}> 
                  <h1>Forget Password</h1>
                  <p>Enter the email address associated with your account and we'll send you a link to reset your password </p>
          
                  <div className="forget" >
                  {forgetValue[0]}
                  
</div>
                  <button id="buttons" type="submit">Continue</button>
                  </div>
              </form>
  
          
           
      </div>
      )
  }
  export default Forget