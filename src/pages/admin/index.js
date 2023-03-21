import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/header";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Widget from "../../components/widget/Widget";

function Admin() {
    let widgetData=[
        {
          title: "No. of buses currently running",
          isMoney: false,
          isCount:true,
          count: 34,
          colorCode:true,
          total:141,
        },
        {
          title: "No. of supervisors",
          isMoney: false,
          isCount:true,
          count: 11,
          
        },  {
          title: "No. of aquifers depletion greather than 50%",
          isMoney: false,
          isCount:true,
          count: 21,
          colorCode:true,
          total:141,
          
        },
      ];
    return ( 
        <div>
            <Sidebar />
      
      <div className="homeContainer">
        <div><Header/></div> 
        <div className="widgets">
          {widgetData.map((el)=>{
            return <Widget data={el} />
          })}
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Capacity Vs Month Graph)" aspect={2 / 1} />
        </div>

      </div>
        </div>
     );
}

export default Admin;