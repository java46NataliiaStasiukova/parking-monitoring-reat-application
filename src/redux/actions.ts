import { PayloadAction } from "@reduxjs/toolkit";
import { CarModel } from "../models/CarModel";
import { DriverModel } from "../models/DriverModel";
import { ReportModel } from "../models/ReportModel";
import { ParkingZoneModel } from "../models/ParkingZoneModel";

export const GET_ALL_CARS_ACTION = "cars/get";
export const GET_ALL_DRIVERS_ACTION = "drivers/get";
export const GET_ALL_REPORTS_ACTION = "reports/get";
export const GET_ALL_PARKINGZONES_ACTION = "zones/get";
export const ADD_CAR_ACTION = "cars/add";
export const ADD_DRIVER_ACTION = "drivers/add";
export const ADD_REPORT_ACTION = "reports/add";
export const ADD_PARKING_ZONE_ACTION = "zones/add";
export const UPDATE_CAR_ACTION = "cars/update";
export const UPDATE_DRIVER_ACTION = "drivers/update";
export const UPDATE_REPORT_ACTION = "reports/update";
export const UPDATE_PARKING_ZONE_ACTION = "zones/update";
export const GET_CAR_ACTION = "car/get";
export const GET_DRIVER_ACTION = "driver/get";
export const GET_REPORT_ACTION = "report/get";
export const GET_PARKING_ZONE_ACTION = "zone/get";
export const DELETE_CAR_ACTION = "cars/delete";
export const DELETE_DRIVER_ACTION = "drivers/delete";
export const DELETE_REPORT_ACTION = "reports/delete";
export const DELETE_PARKING_ZONE_ACTION = "zones/delete";

export const GET_DRIVER_BY_CAR_NUMBER_ACTION = "drivers/getByCar";
export const GET_REPORT_BY_MONTH_ACTION = "reports/getByMonth";
export const GET_REPORTS_BY_AGE_ACTION = "reports/getByAge";
export const GET_REPORTS_BY_DRIVER_ID_ACTION = "reports/getByDriver";
export const GET_REPORTS_BY_CAR_NUMBER_ACTION = "reports/getByCar";
export const GET_CANCELED_REPORTS_ACTION = "reports/canceled";
export const GET_CANCELED_REPORTS_BY_CAR_NUMBER_ACTION = "reports/canceledByCar";
export const GET_NOT_PAID_REPORTS_BY_CAR_NUMBER_ACTION = "reports/notPaid"
export const GET_NOTIFICATION_DATA_ACTION = "data/get";

export function getAllCars(): PayloadAction<void> {
    return {payload: undefined, type: GET_ALL_CARS_ACTION};
}
export function getAllDrivers(): PayloadAction<void> {
    return {payload: undefined, type: GET_ALL_DRIVERS_ACTION};
}
export function getAllReports(): PayloadAction<void> {
    return {payload: undefined, type: GET_ALL_REPORTS_ACTION};
}
export function getAllParkingZones(): PayloadAction<void> {
    return {payload: undefined, type: GET_ALL_PARKINGZONES_ACTION};
}
export function addCar(car: CarModel): PayloadAction<CarModel> {
    return {payload: car, type: ADD_CAR_ACTION};
}
export function addDriver(driver: DriverModel): PayloadAction<DriverModel> {
    return {payload: driver, type: ADD_DRIVER_ACTION};
}
export function addReport(report: ReportModel): PayloadAction<ReportModel> {
    return {payload: report, type: ADD_REPORT_ACTION};
}
export function addParkingZone(parkingZone: ParkingZoneModel): PayloadAction<ParkingZoneModel> {
    return {payload: parkingZone, type: ADD_PARKING_ZONE_ACTION};
}
export function updateCar(carNumber: number, driverId: number): PayloadAction<{carNumber: number; driverId: number}> {
    return {payload: {carNumber, driverId}, type: UPDATE_CAR_ACTION};
}
export function updateDriver(driverId: number, email: String): PayloadAction<{driverId: number; email: String}> {
    return {payload: {driverId, email}, type: UPDATE_DRIVER_ACTION};
}
export function updateReport(reportId: number, status: String): PayloadAction<{reportId: number, status: String}> {
    return {payload: {reportId, status}, type: UPDATE_REPORT_ACTION};
}
export function updateParkingZone(parkingZone: ParkingZoneModel): PayloadAction<ParkingZoneModel> {
    return {payload: parkingZone, type: UPDATE_PARKING_ZONE_ACTION};
}
export function getCar(carNumber: number): PayloadAction<number> {
    return {payload: carNumber, type: GET_CAR_ACTION};
}
export function getDriver(driverId: number): PayloadAction<number> {
    return {payload: driverId, type: GET_DRIVER_ACTION};
}
export function getReport(reportId: number): PayloadAction<number> {
    return {payload: reportId, type: GET_REPORT_ACTION};
}
export function getParkingZone(zoneId: String): PayloadAction<String> {
    return {payload: zoneId, type: GET_PARKING_ZONE_ACTION};
}
export function deleteCar(carNumber: number): PayloadAction<number> {
    return {payload: carNumber, type: DELETE_CAR_ACTION};
}
export function deleteDriver(driverId: number): PayloadAction<number> {
    return {payload: driverId, type: DELETE_DRIVER_ACTION};
}
export function deleteReport(reportId: number): PayloadAction<number> {
    return {payload: reportId, type: DELETE_REPORT_ACTION};
}
export function deleteParkingZone(zoneId: String): PayloadAction<String> {
    return {payload: zoneId, type: DELETE_PARKING_ZONE_ACTION};
}
export function getDriverByCarNumber(carNumber: number): PayloadAction<number> {
    return {payload: carNumber, type: GET_DRIVER_BY_CAR_NUMBER_ACTION};
}
export function getReportsByMonthYear(year: number, month: number): PayloadAction<{year: number; month: number}> {
    return {payload: {year, month}, type: GET_REPORT_BY_MONTH_ACTION};
}
export function getReportsByAge(age: number): PayloadAction<number> {
    return {payload: age, type: GET_REPORTS_BY_AGE_ACTION};
}
export function getReportsByDriverId(driverId: number): PayloadAction<number> {
    return {payload: driverId, type: GET_REPORTS_BY_DRIVER_ID_ACTION};
}
export function getReportsByCarNumber(carNumber: number): PayloadAction<number> {
    return {payload: carNumber, type: GET_REPORTS_BY_CAR_NUMBER_ACTION};
}
export function getCanceledReports(): PayloadAction<void> {
    return {payload: undefined, type: GET_CANCELED_REPORTS_ACTION};
}
export function getCanceledReportsByCarNumber(carNumber: number): PayloadAction<number> {
    return {payload: carNumber, type: GET_CANCELED_REPORTS_BY_CAR_NUMBER_ACTION};
}
export function getNotPaidReportsByCarNumber(carNumber: number): PayloadAction<number> {
    return {payload: carNumber, type: GET_NOT_PAID_REPORTS_BY_CAR_NUMBER_ACTION};
}
export function getNotificationData(carNumber: number): PayloadAction<number> {
    return {payload:carNumber, type: GET_NOTIFICATION_DATA_ACTION};
}


