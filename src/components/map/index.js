import React, { Component, useState} from "react";
//import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const mapCenter = {
    lat: 28.6139,
    lng: 77.2090
}
const style = {
    height: "500px",
    width: "calc(100vw - 310px)",
    position:"relative",
    left:'32px'
}

let markers=[{lat: 28.6139,lng: 77.2090,name:'Aquifer 1'},{lat: 28.6239,lng: 77.2090,name:'Aquifer 2', id:'uuuuusads'},{lat: 28.6539,lng: 77.2090,name:'Aquifer 3'},{lat: 28.6139,lng: 77.3090,name:'Aquifer 4'}]

function AquiferMap(props) {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyATAfGyTPR3xangiUORz9P7qlnIZKbsaFw"
    })
  
    const [map, setMap] = React.useState(null)
    const [showInfoWindow,setShowInfoWindow] = useState(null);
    const [selectedElement,setSelectedElement] = useState(null)
    const [activeMarker,setActiveMarker] = useState(null)

    const onClickMarker = (props,marker,aquiferData)=>{
        setSelectedElement(aquiferData)
        setActiveMarker(marker)
        //this.setState({selectedElement:aquiferData,activeMarker:marker})
    }

    const {MarkerList} = props
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={style}
          center={mapCenter}
          zoom={7}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          {MarkerList.map((el,i)=>{
            return(
            <Marker
             position={{lat:parseInt(el.Latitude),lng:parseInt(el.Longitude)}}
              key={i}
              onClick={(props, marker) => { onClickMarker(props,marker,el) }}
              >
                
            {(selectedElement ? el.id==selectedElement.id : false) &&<InfoWindow
                position={{lat:parseInt(el.Latitude),lng:parseInt(el.Longitude)}}
                marker={activeMarker}
                onCloseClick={() => {
                    setSelectedElement(null)
                }}
            >
                <div>
                <h1>Type:{el.Type}</h1>
                <p>Annual High:{el['Annual High']}</p>
                <p>Annual Low:{el['Annual Low']}</p>
                <p>Amount:{el['Amount']}</p>
                </div>
            </InfoWindow>}
            
                </Marker> 
             
             )
        })}
        </GoogleMap>
    ) : <></>
  }

export default React.memo(AquiferMap)
/* export class MapContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            showInfoWindow:true,
            selectedElement:null,
            activeMarker:null
        }
        this.onClickMarker = this.onClickMarker.bind(this)
    }
    componentDidMount(){
        this.setState({selectedElement:markers[0]})
    }
    onClickMarker(props,marker,aquiferData){

        this.setState({selectedElement:aquiferData,activeMarker:marker})
    }
  render() {
    const {showInfoWindow,selectedElement,activeMarker} = this.state

    return (
      <Map
        google={this.props.google}
        zoom={6}
        initialCenter={mapCenter}
        style={style}
      >
        {markers.map((el,i)=>{
            return(
            <Marker
             position={el}
              key={i}
              onClick={(props, marker) => { this.onClickMarker(props,marker,el) }}
              /> 
             
             )
        })}
       
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATAfGyTPR3xangiUORz9P7qlnIZKbsaFw",
})(MapContainer);
 */