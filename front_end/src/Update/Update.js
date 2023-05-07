import SingleUser from "./SingleUser";

function Update(){
return(
    <div className="activityLogContainer">
        <div className="sub-header">
            <h4>My Activity</h4>
        </div> 
        <div className="activityLogs" id="scrolls-style">
        <SingleUser />
        </div>
    </div>
    );
}
export default Update