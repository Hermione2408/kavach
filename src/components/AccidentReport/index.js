import React, { useState, useEffect } from "react";
import "./accidentReport.scss";
import { findNearestPolice, findNearestHospital } from "../../utils/functions";
import Loader from "../Loader";
import Card from "../Card";
import { useNavigate, useLocation } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';

function AccidentReportModal({ hideModal }) {
  useEffect(() => {
    window.localStorage.setItem("reportAccidentVisited", true);
  }, []);
  const [snackbar,setSnackBar]= useState({
    show:false,
    message:''
  })
  const messageToSend = {
    to:'+919468239450',
    body:'Accident occured at a place near please reach'
  }
  const [isLoading, setIsLoading] = useState(false);
  const [showNearestDetails, setShowNearestDetails] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClose = () => {
    navigate("/", { state: { from: location } });
  };
  const [nearestDetails, setNearestDetails] = useState({});

  const getCoords = async () => {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
      long: pos.coords.longitude,
      lat: pos.coords.latitude,
    };
  };

  const handleReport = async () => {
    try {
      setIsLoading(true);
      const coords = await getCoords();
      let userLatitude = coords.lat;
      let userLongitude = coords.long;
      let nearestHospital = findNearestHospital(userLatitude, userLongitude);
      let nearestPolice = findNearestPolice(userLatitude, userLongitude);
      console.log(nearestHospital, nearestPolice);
      setShowNearestDetails(true);
      setNearestDetails({ hospital: nearestHospital, police: nearestPolice });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }

    //setShowModal(false);
  };

  const handleHelp = async () =>{
    handleReport()
    onSubmit()
  }
  const onSubmit = async () => {

    setSnackBar({
      show:true,
      message:'Message sent successfully'
    })

  }

  return (
    <>
      <>
      {isLoading ? (
        <Loader text={"Submitting report..."} />
      ) : (
        <div className="modal">
          <span className="close" onClick={handleClose}>
                  &times;
                </span>
          {!showNearestDetails ? (
            <div className="accident-modal-content">
              <div className="a-flex a-aic a-jcsb">
                <h2>Report an Accident</h2>
              </div>
              <p className="a-mt24">Are you sure you want to report an accident?</p>
              <div className="a-flex a-mt16">
              <button onClick={handleReport}>Report</button>
              <p className="only">Or</p>
                <button onClick={handleHelp}>Help</button>
              </div>
            </div>
          ) : (
            <div className="accident-modal-content a-flex a-fdc a-aic a-jcsb">
              <div>
                <h2>Details</h2>
              </div>
              <Card data={nearestDetails.hospital} currentPos={getCoords()} />
              <Card data={nearestDetails.police} className="a-mt16" currentPos={getCoords()} />
              <div></div>
            </div>
          )}
        </div>
      )}
      <Snackbar
        open={snackbar.show}
        autoHideDuration={6000}
        onClose={()=>setSnackBar({...snackbar,show:false})}
        message={snackbar.message}
      />

      </>
    </>
  );
}

export default AccidentReportModal;
