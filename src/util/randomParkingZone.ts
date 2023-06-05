import { createParkingZone } from "../models/ParkingZoneModel";
import { getRandomElement, getRandomNumber } from "./random";

export function getRandomParkingZone(parkingData: any) {
    const{zones, city, address, minCost, maxCost} = parkingData;
    const parkingZone = getRandomElement(zones);
    const cost = (getRandomNumber(minCost, maxCost) / 10) * 10;
    const parkingCity = getRandomElement(city);
    const parkingAddress = getRandomElement(address);
    return createParkingZone(parkingZone, cost, parkingCity, parkingAddress);
}