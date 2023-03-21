import React, { Component, useState, useEffect } from "react";
import "./search.scss";
import Map from "../../components/map";
import RectangleContainer from "../../components/rectangle-container";
import { state_arr, s_a } from "../../utils/city";
import Select from "react-select";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from 'axios'
let stateList = state_arr.map((el,i) => {
  return { value: el, label: el , id:i};
});

function KnowyourAquifer() {

  const [selectedStateIndex,SetSelectedStateIndex] = useState(0)
  const [markerList,setMarkerList] = useState([])
  const [selectedState,SetSelectedState] = useState(null)
  const [selecteddistrict,SetSelectedDistrict] = useState(null)
  let districtList = s_a[selectedStateIndex+1].split("|")
  let districtData = districtList.map((el,i)=>{
    return { value: el, label: el,id:i };

  })

  const fetchStateDistrictData = ()=>{
    let dataToSend={
      district:selecteddistrict,
      state:selectedState
  }
  console.log(dataToSend,"DATA")
  let url = 'http://localhost:8383/findDistrict'
  axios.get(url,dataToSend).then((res)=> {
    console.log(res)  
  })
  .catch((err)=>console.log(err)) 
  }

  useEffect(() => {
    let url = 'http://localhost:8383/plotter'
    axios.get(url).then((res)=>{
      let apiData = res.data
      let markerData=[]
      if(apiData){
        apiData.forEach((data)=>{
          let firstLevelObj  = data[Object.keys(data)[0]]
          let uniqueKey =Object.keys(data)[0]
          let secondLevelObj = firstLevelObj[Object.keys(firstLevelObj)[0]]
          markerData.push({...secondLevelObj,id:uniqueKey})
        })
      }
      setMarkerList(markerData)
    }).catch((err)=> console.log(err))
  }, []);
  return (
    <div className="aquifer">
      <Sidebar />
      <div className="aquiferContainer">
        <Navbar />
        <div>
            <div className="a-flex">
              <div className="ml-16 a-hfull p8">
                <RectangleContainer>
                  <div className="a-flex a-fdc a-jcsb a-hfull">
                    <div className="state-text">Select State</div>
                    <Select options={stateList} onChange={(val)=>{
                      SetSelectedState(val.label)
                      SetSelectedStateIndex(val.id)}} />
                  </div>
                </RectangleContainer>
              </div>
              <div className="ml-16 a-hfull p8">
                <RectangleContainer >
                <div className="a-flex a-fdc a-jcsb a-hfull">
                    <div className="state-text">Select District</div>
                    <Select options={districtData} onChange={(val)=>{
                      SetSelectedDistrict(val.label)
                      fetchStateDistrictData()
                      }} />
                  </div>
                </RectangleContainer>
              </div>
              <div className="ml-16 a-hfull p8">
                <RectangleContainer >
                <div className="a-flex a-fdc a-jcsb a-hfull">
                    <div className="state-text">Total Principal Aquifer in Regions</div>
                    <div>98</div>
                  </div>
                </RectangleContainer>
              </div>
              <div className="ml-16 a-hfull p8">
                <RectangleContainer >
                <div className="a-flex a-fdc a-jcsb a-hfull">
                    <div className="state-text">Know any aquifer</div>
                    <div>Report?</div>
                  </div>
                </RectangleContainer>
              </div>
            </div>
            <div className="map-container">
              <Map MarkerList ={markerList} />
            </div>
          </div>
        </div>
    </div>
  );
}

export default KnowyourAquifer;
