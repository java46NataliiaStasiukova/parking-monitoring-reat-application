import { ParkingZoneModel } from "../models/ParkingZoneModel";
import ParkingZonesService from "./ParkingZonesService";


export default class ParkingZoneServiceArray implements ParkingZonesService {
    
    zones: Map<String, ParkingZoneModel> = new Map<String, ParkingZoneModel>();
    
    
    getAllParkingZones(): ParkingZoneModel[] {
        return Array.from(this.zones.values());
    }
    addParkingZone(parkingZone: ParkingZoneModel): String {
        let res = `parking zone with id ${parkingZone.parkingZone} already exist`;
        if(!this.zones.has(parkingZone.parkingZone)){
            res = `new parking zone: ${parkingZone.parkingZone} was added`;
            this.zones.set(parkingZone.parkingZone, parkingZone);
        }
        return res;
    }
    deleteParkingZone(zoneId: String): String {
        let res = `parking zone with id ${zoneId} not exist`;
        if(this.zones.has(zoneId)){
            res = `parking zone: ${zoneId} was removed`;
            this.zones.delete(zoneId);
        }
        return res;
    }
    getParkingZone(zoneId: String): String {
        let res = `parking zone with id ${zoneId} not exist`;
        let zone = this.zones.get(zoneId);
        if(zone != undefined){
            res = `parking zone: ${zone}`;
        }
        return res;
    }
    updateParkingZone(parkingZone: ParkingZoneModel): String {
        let res = `parking zone with id ${parkingZone.parkingZone} not exist`;
        if(this.zones.has(parkingZone.parkingZone)){
            res = `new parking zone: ${parkingZone.parkingZone} was updated`;
            this.zones.set(parkingZone.parkingZone, parkingZone);
        }
        return res;
    }

}