import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Search from "../SearchBar/searchBar";
import ActivityLog from "../activityLog/activityLog";

function PharmacistHomePage(){
return(
<div  className="homePage">
<Header pageTitle={"FirstTimeLoggedIn"}/>
<div className="homeContent" style={{display:'flex' }}>
<div style={{marginLeft:'30vw',marginTop:'30gitvh'}}>
<Search/> 
<p style={{textAlign:'center' ,color:'gray'}}>Insert Prescription Id</p>

</div>


<div className="ActivityHolder">
  <ActivityLog />
</div>
</div>
<Footer/>
</div>
);
}
export default PharmacistHomePage