import "./busdetail.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import busData from "../../utils/db.json";
import BusImage from '../../assets/imgs/bus.png'
import moment from 'moment';

import {
  useParams,
} from "react-router-dom";
const Single = () => {
  const {busList} = busData
  let params = useParams();
  console.log(busData,params,"BUS DATA")
  const singleBusData = busList.find((bus)=>bus.id == params.busId)
  console.log(singleBusData)
  const chartData = singleBusData.last_ten_rides.map((el,i)=>{
    const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000)   
    let dateMoment = moment(date).format('DD/MM');
  
    return {date:dateMoment,seats_occupied:el.noOfPassenger}
  })
  const stationData = [singleBusData.depart_from,...singleBusData.stations,singleBusData.going_to].map((el)=>{
    return {name:el,code:el.substring(0,3)}
  })
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={BusImage}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{singleBusData.depart_from}-{singleBusData.going_to} {singleBusData.live_status.isrunning =='active' && <div className="running-bus"></div>} </h1>
                <div className="detailItem">
                  <span className="itemKey">Bus No:</span>
                  <span className="itemValue">{singleBusData.bus_no}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Driver:</span>
                  <span className="itemValue">{singleBusData.driverName}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Contact:</span>
                  <span className="itemValue">
                   {singleBusData.emergency_contact}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">From/To</span>
                  <span className="itemValue">{singleBusData.depart_from}/{singleBusData.going_to}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Single;
