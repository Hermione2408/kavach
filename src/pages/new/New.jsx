import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import Select from "react-select";
import { state_arr, s_a } from "../../utils/city";
import axios from "axios";


let stateList = state_arr.map((el,i) => {
  return { value: el, label: el , id:i};
});
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [id,setId] = useState("")
  const [state,setState] = useState(stateList[0].label)
  const [district,setDistrict] = useState("")
  const [type,setType] = useState("")
  const [amount,setAmount] = useState("")
  const [quality,setQuality] = useState("")
  const [lat,setLat]  = useState(26)
  const [long,setLong] = useState(71)
  const [selectedStateIndex,SetSelectedStateIndex] = useState(0)
  const [annHigh,setAnnHigh] = useState(80)
  const [annLow,setAnnLow] = useState(80)

  const generateString = (length) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const resetState = () =>{
  setFile("")
  setId("")
  setState("")
  setDistrict("")
  setType("")
  setAmount("")
  setQuality("")
  setLat(26)
  setLong(71)
}

  const SubmitForm = ()=>{
    console.log('FORM SUBMIT')
    
      let dataToSend={
        state:state, 
        district:district, 
        type:type, 
        amount:amount, 
        quality:quality, 
        lat:lat, 
        lon:long, 
        annuHigh:annHigh, 
        annuLow:annLow, 
        Time: new Date().getTime(), 
        ID:'assss'
    }
    console.log(dataToSend,"DATA")
    let url = 'http://localhost:8383/bulkData'
    axios.post(url,dataToSend).then((res)=> {
      if(res.status == 200){
        resetState()
      }})
    .catch((err)=>console.log(err)) 
}

  let districtList = s_a[selectedStateIndex+1].split("|")
  let districtData = districtList.map((el,i)=>{
    return { value: el, label: el,id:i };

  })
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <div className="form">
              {/* <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div> */}
              <div className="formInput">
                  <label>ID</label>
                  <input value={id} onChange={(e)=>setId(e.target.value)} type='text' placeholder={'john'} />
              </div>
              <div className="formInput" >
                  <label>State</label>
                  <Select options={stateList} onChange={(val)=>{ 
                    SetSelectedStateIndex(val.id)
                    setState(val.label)
                    }} />
              </div>
              <div className="formInput" >
                  <label>Distrcit</label>
                  <Select options={districtData} onChange={(val)=>setDistrict(val.label)} />
              </div>

              <div className="formInput" >
                  <label>Type</label>
                  <input value={type} onChange={(e)=>setType(e.target.value)} type='text' />
              </div>
              <div className="formInput" >
                  <label>Amount</label>
                  <input value={amount} onChange={(e)=>setAmount(e.target.value)} type='text' placeholder={4322} />
              </div>
              <div className="formInput" >
                  <label>Quality</label>
                  <input value={quality} onChange={(e)=>setQuality(e.target.value)} type='text' placeholder={89} />
              </div>
              <div className="formInput" >
                  <label>Latitude</label>
                  <input value={lat} onChange={(e)=>setLat(e.target.value)} type='text' placeholder={31.12} />
              </div>
              <div className="formInput" >
                  <label>Longitdue</label>
                  <input value={long} onChange={(e)=>setLong(e.target.value)} type='text' placeholder={70.22} />
              </div>
              <div className="formInput" >
                  <label>Annual High</label>
                  <input value={annHigh} onChange={(e)=>setAnnHigh(e.target.value)} type='text' placeholder={89} />
              </div>
              <div className="formInput" >
                  <label>Annual Low</label>
                  <input value={annLow} onChange={(e)=>setAnnLow(e.target.value)} type='text' placeholder={89} />
              </div>
              <button onClick={()=>SubmitForm()}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
