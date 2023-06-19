import React from "react";
import { addParkingZone } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { ParkingZoneModel } from "../../models/ParkingZoneModel";
import ParkingZoneForm from "../forms/ParkingZoneForm";


const AddParkingZonePage: React.FC = () => {
    const dispatch = useDispatch();
    function onSubmit(zone: ParkingZoneModel){
        console.log(`adding parking zone: ${zone}`);
        dispatch(addParkingZone(zone));
    }
    return <>
        <ParkingZoneForm submitFn={onSubmit}></ParkingZoneForm>
    </>
    
}

export default AddParkingZonePage;