import React from "react";
import petrolPumpData from '../../utils/petrol_pump.json';
import PetrolPumpCard from '../../components/PetrolPumpCard';

const PetrolPumpList = ({ location }) => {
  return (
    <div>
      <h2>Nearest Petrol Pumps to {location.address}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {petrolPumpData.petrolPumps.map((pump, index) => (
          <PetrolPumpCard
            key={index}
            image={pump.image}
            title={pump.name}
            description={`${pump.address} (${pump.distance} from your location)`}
            price={`Price: ${pump.price}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PetrolPumpList;
