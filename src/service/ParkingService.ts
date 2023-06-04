import React from "react";
import { CarModel } from "../models/CarModel";
import { DriverModel } from "../models/DriverModel";
import { ReportModel } from "../models/ReportModel";

export default interface ParkingService {
    addCar(car: CarModel): CarModel | null;
    addDriver(driver: DriverModel): DriverModel | null;
    addReport(report: ReportModel): ReportModel | null;

    updateCar(carNumber: bigint, driverId: bigint): String;
    updateDriver(driverId: bigint, email: String): String;
    updateReport(reportId: bigint, status: String): String;

    getCar(carNumber: bigint): CarModel | null;
    getDriver(driverId: bigint): DriverModel | null;
    getReport(reportId: bigint): ReportModel | null;

    deleteCar(carNumber: bigint): String;
    deleteDriver(driverId: bigint): String;
    deleteReport(reportId: bigint): String;

    getDriverByCarNumber(carNumber: bigint): String;
    getReportsByMonth(year: number, month: number): ReportModel[];
    getReportsByAge(age: number): ReportModel[];
    getReportsByDriverId(driverId: bigint): ReportModel[];
    getReportsByCarNumber(carNumber: bigint): ReportModel[];
    getCanceledReports(): ReportModel[];
    getCanceledReportsByCarNumber(carNumber: bigint): ReportModel[];
    getNotPaidReportsByCarNumber(carNumber: bigint): ReportModel[];

}