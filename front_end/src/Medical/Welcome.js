import './App.css'
import * as React from 'react';
 function Welcome(){
//  let history=useHistory();

  function loginHandler(){
   //  history.push("/Login");
      // window.location.href='./login';
      // window.open(Login,'-blank','noreferrer');
   };
return(

<div className="background"> 

<input type="button"   value="Login"  onSubmit={loginHandler}/>            
   <p className='welcome'>Welcome <br/> &nbsp; &nbsp;&nbsp; To EHRS</p>  
   <h5 className='click'>Click To Login</h5>
  
       <div >
            <section id="slider">
             <input type="radio" name="slider" className="radio1"id="s1" defaultChecked="false"/>
                <input type="radio" name="slider" id="s2" defaultChecked="true"/>
                <input type="radio" name="slider" id="s3" defaultChecked="false"/>
              <label htmlFor="s1" id="slide1">
                <h1>Mission</h1>
             <p>Our system's mission is to register and save time and energy in order to ensure the accessibility, 
              accuracy, availability, integrity, and security of patient health information and to create healthier 
              communities and enhance the quality of life for patients, physicians, and/or caregivers.</p>
              </label>
              <label htmlFor="s2" id="slide2">
              <h1>Vission</h1>
              <p>being acknowledged nationally as the leader in encouraging top-notch 
                patient care, advocacy, and professional fulfillment in the field of medicine and its specializations</p>
              </label>
              <label htmlFor="s3" id="slide3">
              <h1>Goal</h1>
              <p>Our goal is for all patients who join our system to receive the best care possible 
                that is provided at the appropriate time, location, and cost. We are committed to 
                developing an environment inside our organization where our patients, staff, and 
                physicians are respected. We value you selecting Ethiopian Electronic Health Record System. </p>
                </label>
            </section>
          </div>
           
 </div>  
     

);
}
export default Welcome