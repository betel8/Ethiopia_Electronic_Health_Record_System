import './css/common.css';
import About from './About_us/About us';
import Login from './Login/Login';
import { useState } from 'react';

function App(){
const [page,setPage]=useState(1);
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
 else{
   return(
     <div className="App">
       <Login pageHandler={setPage} />
     </div>
);
 }

}

export default App;
