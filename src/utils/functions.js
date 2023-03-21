
import PoliceStationData from './police_station.json'
import HospitalData from "./hospital.json"
export function findNearestPolice(latitude, longitude) {
    let minDistance = Infinity;
    let nearestPolice = null;
    let policeStations = PoliceStationData
    for (let i = 0; i < policeStations.length; i++) {
      const station = policeStations[i];
      const distance = getDistance(latitude, longitude, station.latitude, station.longitude);
      if (distance < minDistance) {
        minDistance = distance;
        nearestPolice = station;
      }
    }
  
    return nearestPolice;
  }
  

  function toRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  export function findNearestHospital(latitude, longitude) {
    let minDistance = Infinity;
    let nearestHospital = null;
    let hospitals = HospitalData
    for (let i = 0; i < hospitals.length; i++) {
      const hospital = hospitals[i];
      const distance = getDistance(latitude, longitude, hospital.latitude, hospital.longitude);
      if (distance < minDistance) {
        minDistance = distance;
        nearestHospital = hospital;
      }
    }
  
    return nearestHospital;
  }
  
  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth's radius in meters
    const phi1 = toRadians(lat1);
    const phi2 = toRadians(lat2);
    const deltaPhi = toRadians(lat2 - lat1);
    const deltaLambda = toRadians(lon2 - lon1);
  
    const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
    return R * c;
  }

    