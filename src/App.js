import './css/common.css';
import About from './About_us/About us';
import Login from './Login/Login';
import { useState } from 'react';
import HomeController from './Home/HomeController';
import ForgetPassword from './forgetPassword/ForgetPassword';
import Sidebar from './Components/Sidebar';
import { NotificationProvider } from './Components/NotificationProvider';
import TestComponent from './Components/TestComponent';
function App(){
const [page,setPage]=useState('test');
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

   } else if(page === 'test') {
      return (
        <div className='App tw-flex tw-h-screen tw-overflow-y-auto'>
          <NotificationProvider>
            <Sidebar  />
            <div>
              <TestComponent msg='first notification' /> <br /> <br /> <br />
              <TestComponent msg='second notification' /> <br /> <br /> <br />
              <TestComponent /> <br /> <br /> <br />
              <TestComponent /> <br /> <br /> <br />
              <TestComponent /> <br /> <br /> <br />
            </div>
          </NotificationProvider>
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
