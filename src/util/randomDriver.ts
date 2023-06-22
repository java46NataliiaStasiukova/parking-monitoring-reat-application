import { createDriver } from "../models/DriverModel";
import { getRandomDate, getRandomElement, getRandomNumber } from "./random";

export function getRandomDriver(driverData: any) {
    const {name, minDriverId, maxDriverId, minAge, maxAge} = driverData;
    const driverId = getRandomNumber(minDriverId, maxDriverId);
    const driverName = getRandomElement(name);
    const email = driverName + driverId + '@gmail.com';
    const birthdate = getRandomDate(new Date().getFullYear() - maxAge,
    new Date().getFullYear() - minAge).toDateString();
    return createDriver(driverId, driverName, email, birthdate);
}