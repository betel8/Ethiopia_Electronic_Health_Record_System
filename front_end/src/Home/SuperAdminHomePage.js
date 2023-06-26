import React, { useEffect } from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import ContentBox from "./ContentBox";
import CONSTANT from "../Constant";
import ActivityContainer from "../ActivityMonitor/ActivityContainer";
import ActivityLog from "../activityLog/activityLog";
import { PieChart ,Pie ,FunnelChart,Tooltip,LabelList,Funnel} from "recharts";

function SuperAdminHomePage(props){
    const contents=CONSTANT.homeContent;
    const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        }
      ];
    const renderLineChart = (
        <div className="pieChart" style={{marginRight:"5vw"}}>
            <PieChart width={530} height={250}>
            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        </div>
      );
      const data = [
        {
          "value": 100,
          "name": "Doctor",
          "fill": "#52B2BF"
        },
        {
          "value": 80,
          "name": "Nurse",
          "fill": "#83a6ed"
        },
        {
          "value": 50,
          "name": "Pharmacist",
          "fill": "#4CBB17"
        },
        {
          "value": 40,
          "name": "Admin",
          "fill": "#D6B85A"
        },
        {
          "value": 26,
          "name": "SuperAdmin",
          "fill": "#a4de6c"
        }
      ]
    const funnelChart=(
        <div className="pieChart">
            <FunnelChart width={530} height={250}>
            <Tooltip />
                <Funnel
                    dataKey="value"
                        data={data}
                        isAnimationActive
                >
                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                </Funnel>
        </FunnelChart>
        </div>
        
    )

    const contentBoxs=contents.map((content)=>{
        return (<ContentBox
        img={content.img}
        to={content.to}
        Handler={props.Transform}/>);
    });


    return(
        <section className="homePage">
        <Header pageTitle={"Home"} logout={props.logout} Transform={props.Transform}/>
        <section className="homeContent">
            <div style={{marginBottom:"2vh",display:"flex",justifyContent:"center"}}>{renderLineChart}{funnelChart}</div>
            <div style={{display:"flex" ,marginBottom:"1vh"}}>
                <ActivityContainer/>  
                <ActivityLog/>
            </div>
            <div style={{display:"flex"}}>{contentBoxs}</div>
        </section>
        <Footer/>
        </section>
    );

}
export default SuperAdminHomePage;