import './css/common.css';
import About from './About_us/About us';
import Login from './Login/Login';
import { useState } from 'react';
import HomeController from './Home/HomeController';
import ForgetPassword from './forgetPassword/ForgetPassword';
function App(){
const [page,setPage]=useState();
  if(page===1){
    return(
           <div className="App">
             <Login pageHandler={setPage} />
            </div>
       );}
   else if(page===2){
       return(
         <div className="App">
           <About pageHandler={setPage} />
         </div>
     );}
   else if(page===3){
     return(
          <div className="App">
         <ForgetPassword pageHandler={setPage} />
       </div>
     )

   }
   else{
     if(sessionStorage.getItem('jwt')){
           return(
             <div className="App">
               <HomeController pageHandler={setPage} />
             </div>
             );
         }else{
           return(      
           <div className="App">
             <Login pageHandler={setPage} />
           </div>
      );

    }
  }}
export default App;
