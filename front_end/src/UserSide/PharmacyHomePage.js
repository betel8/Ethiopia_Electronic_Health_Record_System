import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Search from "../SearchBar/searchBar";
import ActivityLog from "../activityLog/activityLog";

function PharmacyHomePage(){
return(
<div  className="homePage">
<Header pageTitle={"FirstTimeLoggedIn"}/>
<div className="homeContent" style={{display:'flex' }}>
<div style={{marginLeft:'30vw',marginTop:'20vh'}}>
<Search/> 
<p style={{textAlign:'center' ,color:'gray'}}>Insert Prescription Id</p>

</div>


<div style={{width:'30vw',marginLeft:'10vw',marginTop:'5vh',backgroundColor:'white',boxShadow:'0 1vh 1vw rgba(0, 0, 0, 0.338)'}} >
  <ActivityLog />
</div>
</div>
<Footer/>
</div>
);
}
export default PharmacyHomePage