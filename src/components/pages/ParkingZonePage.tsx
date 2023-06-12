import React from "react";
import { useSelector } from "react-redux";
import { ParkingZoneModel } from "../../models/ParkingZoneModel";
import { ParkingZonesType } from "../../redux/store";
import { getRandomNumber } from "../../util/random";

const ParkingZonePage: React.FC = () => {

    const zones: ParkingZoneModel[] = useSelector<ParkingZonesType, ParkingZoneModel[]>(state => state.zones);

    return <>
    <div>
        <ul>{zones.map(c => <li key={+c.parkingZone}>{JSON.stringify(c)}</li>)}</ul>
    </div>
    </>
}

export default ParkingZonePage;