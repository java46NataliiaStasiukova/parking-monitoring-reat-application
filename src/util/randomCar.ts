import { CarModel, createCar } from "../models/CarModel";
import { getRandomCarNumber, getRandomNumber } from "./random";

export function getRandomCar(driverData: any): CarModel {
    const{minDriverId, maxDriverId} = driverData
    const carNumber = getRandomCarNumber();
    const driverId = getRandomNumber(minDriverId, maxDriverId);
    return createCar(carNumber, driverId);
}