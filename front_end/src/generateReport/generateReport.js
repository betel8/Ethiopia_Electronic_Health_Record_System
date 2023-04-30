import Warning from "../SharedComponents/warning";
import SingleInputContainer from "../SharedComponents/SingleInputContainer";
import SplineChart from "../chart/Spline Chart";

function GenerateReport(){
    const Report=[
  
        {
          'name':'search',
          'type':'search',
          'required':true,
          'validationType':'name',
          'label':'Search' ,  
       },
        
        {
          'name':'start',
          'type':'date',
          'validationType':'start',
          'label':'Start Date',
          'required':true,
        }
        ,{
            'name':'end',
            'type':'date',
            'validationType':'end',
            'label':'End Date',
            'required':true,
          }]
        const {handler,handleSubmit,intergratedValue}=Warning(Report);  
    
    
    const ReportValue=intergratedValue.map((value,index)=>(<SingleInputContainer name={value.name} type={value.type} handler={handler} 
        label={value.label} error={value.error} required={value.required} validationType={value.validationType} />));
    return(
        <div className="activityLogContainer">
        <div className="sub-header">
            <h4>Generate Report</h4>
        </div> 
    
            <form onSubmit={handleSubmit}style={{display:"flex"}} >      
                   {ReportValue} 
                               
                  </form>

        
         
    </div>      

    );
}
export default GenerateReport;