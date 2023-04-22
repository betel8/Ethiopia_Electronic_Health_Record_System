import './css/common.css';
import About from './About_us/About us';
import Login from './Login/Login';
import ActivityLog from './activityLog/activityLog'
import { useState } from 'react';
import Profile from './profile/profile'
import HomePage from './Home/HomePage';
import HomeController from './Home/HomeController';
import Confirm from './Home/confirm';
import ContactUs from './Contact us/contactUs';
import FirstTimePasswordChange from './Home/FirstTimePasswordChange';
import PatientRecord from './patientRecord/patientRecord';
import RemoveUser from './Remove_User/RemoveUser';
import Prescription from './prescription/prescription';
function App(){
const [page,setPage]=useState();
// if(page===1){
  return(
    <Login/>
  //  <div className="App">
  //       <Login pageHandler={setPage} />
  //     </div>
  // );}
  // else if(page===2){
  //   return(
  //     <div className="App">
  //       <About pageHandler={setPage} />
  //     </div>
  // );}
  // else{
  //   if(sessionStorage.getItem('jwt')){
  //     return(
  //       <div className="App">
  //         <HomeController pageHandler={setPage} />
  //       </div>
  //       );
  //   }else{
  //     return(      
  //     <div className="App">
  //       <Login pageHandler={setPage} />
  //     </div>
      );

    }
    

 //}}
export default App;
