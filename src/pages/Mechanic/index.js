import mechanicsData from '../../utils/mechanics.json';
import "./mechanic.scss"
const MechanicsList = () => {
    return (
      <div className="mechanics-container">
        <h1 style={{paddingLeft:'20px'}}>Mechanics near you</h1>
        {mechanicsData.mechanics.map(mechanic => (
          <div className="mechanic-card" key={mechanic.name}>
            <h3 className="mechanic-name">{mechanic.name}</h3>
            <p className="mechanic-address">{mechanic.address}</p>
            <p className="mechanic-phone">{mechanic.phone}</p>
            <div className="mechanic-map">
              <iframe
                title={mechanic.name}
                width="100%"
                height="200"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://maps.google.com/maps?q=${mechanic.location.latitude},${mechanic.location.longitude}&z=15&output=embed`}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MechanicsList;