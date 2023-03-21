import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript, InfoWindow } from "@react-google-maps/api";
import { TextField } from "@material-ui/core";
import "./homemap.css";
import RedMapMarker from "../../assets/imgs/map-marker-svg.svg";
import BlueMapMarker from "../../assets/imgs/blue-marker-map.png";
import { userReportedPotholes, confirmedPotholes } from "../../utils/potholes";


const mapContainerStyle = {
  width: "100%",
  height: "calc(100vh - 70px)",
};
const center = {
  lat: 26.9124,
  lng: 75.7873,
};

const customMapStyles = [
    {
      featureType: 'all',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ];

const MapComponent = () => {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  const onMapLoad = (map) => {
    mapRef.current = map;
  };
  
  const [userPotholes, setUserReportedPotholes] =
    useState(userReportedPotholes);
  const [confirmPotholes, setConfirmedPotholes] = useState(confirmedPotholes);
  const [search, setSearch] = useState("");
  const [selectedMarker, setSelectedMarker] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyATAfGyTPR3xangiUORz9P7qlnIZKbsaFw",
  });
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const getIcon = (url) => {
    if (isLoaded) {
      return {
        url: url,
        scaledSize: new window.google.maps.Size(25, 25),
      };
    }
    return url;
  };

  if (!isLoaded) return <div>Loading...</div>;

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoClose = () => {
    setSelectedMarker(null);
  };

  return (
    <div className="map-container" ref={mapContainerRef}>
      <TextField
        label="Search location"
        variant="outlined"
        fullWidth
        value={search}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        onLoad={onMapLoad}
        options={{ styles: customMapStyles }}
      >
        {userPotholes.map((pothole, index) => (
          <Marker
            key={index}
            position={{
              lat: pothole.location.latitude,
              lng: pothole.location.longitude,
            }}
            icon={getIcon(RedMapMarker)}
            onClick={() => handleMarkerClick(pothole)}
          >
            {selectedMarker === pothole && (
                <InfoWindow onCloseClick={handleInfoClose}>
                  <div>User Reported</div>
                </InfoWindow>
              )}
            </Marker>
          ))}
          {confirmPotholes.map((pothole, index) => (
            <Marker
              key={index}
              position={{
                lat: pothole.location.latitude,
                lng: pothole.location.longitude,
              }}
              icon={getIcon(BlueMapMarker)}
              onClick={() => handleMarkerClick(pothole)}
            >
              {selectedMarker === pothole && (
                <InfoWindow onCloseClick={handleInfoClose}>
                  <div>Confirmed</div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </div>
    );
  };
  
  export default MapComponent;
  