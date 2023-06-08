import { ParkingZoneModel } from "../models/ParkingZoneModel";


export default interface ParkingZonesService {

    addParkingZone(parkingZone: ParkingZoneModel): String;
    deleteParkingZone(zoneId: String): String;
    getParkingZone(zoneId: String): String;
    updateParkingZone(parkingZone: ParkingZoneModel): String;
    getAllParkingZones(): ParkingZoneModel[];
}