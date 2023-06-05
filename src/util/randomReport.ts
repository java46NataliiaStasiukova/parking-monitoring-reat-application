import { createReport } from "../models/ReportModel";
import { getRandomCarNumber, getRandomDate, getRandomElement, getRandomNumber } from "./random";

export function getRandomReport(driverData: any, parkingData: any,
    reportData: any) {
    const {name, minDriverId, maxDriverId, minAge, maxAge} = driverData;
    const {zones, city, address, minCost, maxCost} = parkingData;
    const {minYear, maxYear, status} = reportData;
    const id = getRandomNumber(1, maxDriverId);
    const carNumber = getRandomCarNumber();
    const driverId = getRandomNumber(minDriverId, maxDriverId);
    const parkingZone = getRandomElement(zones);
    const date = getRandomDate(minYear, maxYear).toDateString();
    const cost = (getRandomNumber(minCost, maxCost) / 10) * 10;
    const paymentStatus = getRandomElement(status);
    const driverName = getRandomElement(name);
    return createReport(id, carNumber, driverId, parkingZone, 
        date, cost, paymentStatus, driverName);
}