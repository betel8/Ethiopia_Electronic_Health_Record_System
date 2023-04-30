import Warning from '../SharedComponents/warning';
import SingleInputContainer from '../SharedComponents/SingleInputContainer';

function ChangePassword(){


const Changepassword=[
    {
      'name':'current',
    'type':'password',
     'required':true,
     'validationType':'password',
      'label':'Current Password' ,  
   },
   {
    'name':'new',
  'type':'password',
   'required':true,
   'validationType':'passsword',
    'label':'New Password' ,  
 },
 {
    'name':'confirm',
  'type':'password',
   'required':true,
   'validationType':'password',
    'label':'Confirm Password' ,  
 },
]
   const {handler,handleSubmit}=Warning(Changepassword,"Change");  
     
     
     const ChangePasswordValue=Changepassword.map((value,index)=>{
 
     return(<SingleInputContainer name={value.name} type={value.type} handler={handler} onchange={onchange} 
         label={value.label} error={value.error} required={value.required} validationType={value.validationType} />);
       })
     return(
        <form  onSubmit={handleSubmit}>
         <div className="activityContainer" style={{width:'25vw' ,padding:'3vh',border:'0.5vh solid silver'}}>
        <div > 
            <h3 className="title">Change Password</h3>
           
{ChangePasswordValue}
<p>Forget Password?</p>

<button id='buttons'>Change Password</button>
</div>
        </div>
        </form>
        );
     }
     export default ChangePassword