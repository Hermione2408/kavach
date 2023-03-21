import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class BusRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      busLocation: {
        lat: 26.9124,
        lng: 75.7873
      },
      destination: {
        lat: 26.2389, // destination location in Rajasthan
        lng: 73.0243
      },
      route: [
        { lat: 26.9124, lng: 75.7873 },
        { lat: 26.9155, lng: 75.7845 },
        { lat: 26.9176, lng: 75.7816 },
        { lat: 26.9191, lng: 75.7774 },
        { lat: 26.9200, lng: 75.7728 },
        { lat: 26.9191, lng: 75.7683 },
        { lat: 26.9176, lng: 75.7642 },
        { lat: 26.9155, lng: 75.7613 },
        { lat: 26.9124, lng: 75.7585 },
        { lat: 26.9093, lng: 75.7613 },
        { lat: 26.9072, lng: 75.7642 },
        { lat: 26.9057, lng: 75.7683 },
        { lat: 26.9048, lng: 75.7728 },
        { lat: 26.9057, lng: 75.7774 },
        { lat: 26.9072, lng: 75.7816 },
        { lat: 26.9093, lng: 75.7845 },
        { lat: 26.9124, lng: 75.7873 },
        { lat: 26.9155, lng: 75.7902 },
        { lat: 26.9176, lng: 75.7931 },
        { lat: 26.9191, lng: 75.7972 },
        { lat: 26.9200, lng: 75.8017 },
        { lat: 26.9191, lng: 75.8062 },
        { lat: 26.9176, lng: 75.8103 },
        { lat: 26.9155, lng: 75.8132 },
        { lat: 26.9124, lng: 75.8159 },
        { lat: 26.9093, lng: 75.8132 },
        { lat: 26.9072, lng: 75.8103 },
        { lat: 26.9057, lng: 75.8062 },
        { lat: 26.9048, lng: 75.8017 },
        { lat: 26.9057, lng: 75.7972 },
        { lat: 26.9072, lng: 75.7931 },
        { lat: 26.9093, lng: 75.7902 },
        { lat: 26.9124, lng: 75.7873 },
        { lat: 26.9155, lng: 75.7845 },
        { lat: 26.9176, lng: 75.7816 },
        { lat: 26.9191, lng: 75.7774 },
        { lat: 26.9200, lng: 75.7728 },
        { lat: 26.9191, lng: 75.7681 },
        { lat: 26.2389,lng: 73.0243} ] // array of latitude and longitude coordinates for the bus route
    };
  }

  componentDidMount() {
    // make an API call to fetch the bus route data
    // fetch('https://api.example.com/busRoute')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ route: data }); // assuming the API returns an array of latitude and longitude coordinates for the bus route
    //   })
    //   .catch(error => console.error(error));

    // // start a timer to periodically update the bus location data
    // this.timer = setInterval(() => {
    //   fetch('https://api.example.com/busLocation')
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({ busLocation: data }); // assuming the API returns an object with 'lat' and 'lng' properties for the bus location
    //     })
    //     .catch(error => console.error(error));
    // }, 5000); // update every 5 seconds
  }

  componentWillUnmount() {
    clearInterval(this.timer); // stop the timer when the component unmounts
  }

  render() {
    const { busLocation, destination, route } = this.state;

    if (!busLocation || route.length === 0) {
      return <p>Loading...</p>;
    }

    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={busLocation}
      >
        <Marker position={busLocation} />
        <Marker position={destination} />
        <Polyline
          path={route}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATAfGyTPR3xangiUORz9P7qlnIZKbsaFw  "
})(BusRoute);