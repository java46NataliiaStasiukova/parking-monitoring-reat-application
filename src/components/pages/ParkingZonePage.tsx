import React from "react";
import { parkingZonesService } from "../../config/service-config";


const ParkingZonePage: React.FC = () => {


    return <>
    <div>
        <ul>{parkingZonesService.getAllParkingZones().map(c => <li key={c.fineCost}>{JSON.stringify(c)}</li>)}</ul>
    </div>
    </>
}

export default ParkingZonePage;