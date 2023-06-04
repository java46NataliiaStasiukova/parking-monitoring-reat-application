import React from "react";
import ParkingService from "./ParkingService";
import { CarModel } from "../models/CarModel";
import { DriverModel } from "../models/DriverModel";
import { ReportModel } from "../models/ReportModel";

export default class ParkingServiceArrays implements ParkingService {


    cars: Map<bigint, CarModel> = new Map<bigint, CarModel>;
    drivers: Map<bigint, DriverModel> = new Map<bigint, DriverModel>;
    reports: Map<bigint, ReportModel> = new Map<bigint, ReportModel>;

    addCar(car: CarModel): CarModel | null {
        let res = null;
        if(!this.cars.has(car.carNumber)){
            this.cars.set(car.carNumber, car);
            res = car;
        }
        return res;
    }
    addDriver(driver: DriverModel): DriverModel | null {
        let res = null;
        if(!this.drivers.has(driver.id)){
            this.drivers.set(driver.id, driver);
            res = driver;
        }
        return res;
    }
    addReport(report: ReportModel): ReportModel | null {
        let res = null;
        if(!this.reports.has(report.id)){
            this.reports.set(report.id, report);
            res = report;
        }
        return res;
    }
    updateCar(carNumber: bigint, driverId: bigint): String {
        let res = `car with number: ${carNumber} not exist`;
        let car = this.cars.get(carNumber);
        if(car != undefined){
            car.driverId = driverId;
            this.cars.set(carNumber, car);
            res = `car with number: ${carNumber} was updated`;
        }
        return res;
    }
    updateDriver(driverId: bigint, email: String): String {
        let res = `driver with id: ${driverId} not exist`;
        let driver = this.drivers.get(driverId);
        if(driver != undefined){
            driver.email = email;
            this.drivers.set(driverId, driver);
            res = `driver with id: ${driverId} was updated`;
        }
        return res;
    }
    updateReport(reportId: bigint, status: String): String {
        let res = `report with id: ${reportId} not exist`;
        let report = this.reports.get(reportId);
        if(report != undefined){
            report.status = status;
            this.reports.set(reportId, report);
            res = `report with id: ${reportId} was updated`;
        }
        return res;
    }
    getCar(carNumber: bigint): CarModel | null{
        let res = null;
        let car = this.cars.get(carNumber);
        if(car != undefined){
            res = car;
        }
        return res;
    }
    getDriver(driverId: bigint): DriverModel | null {
        let res = null;
        let driver = this.drivers.get(driverId);
        if(driver != undefined){
            res = driver;
        }
        return res;
    }
    getReport(reportId: bigint): ReportModel | null {
        let res = null;
        let report = this.reports.get(reportId);
        if(report != undefined){
            res = report
        }
        return res;
    }

    deleteCar(carNumber: bigint): String {
        let res = `car with number: ${carNumber} not exist`;
        let car = this.cars.get(carNumber);
        if(car != undefined){
            this.cars.delete(carNumber);
            res = `car with number: ${carNumber} was removed`;
        }
        return res;
    }
    deleteDriver(driverId: bigint): String {
        let res = `driver with id: ${driverId} not exist`;
        let driver = this.drivers.get(driverId);
        if(driver != undefined){
            this.drivers.delete(driverId);
            res = `driver with id: ${driverId} was removed`;
        }
        return res;
    }
    deleteReport(reportId: bigint): String {
        let res = `report with id: ${reportId} not exist`;
        let report = this.reports.get(reportId);
        if(report != undefined){
            this.reports.delete(reportId);
            res = `report with id: ${reportId} was removed`;
        }
        return res;
    }
    getDriverByCarNumber(carNumber: bigint): String {
        throw new Error("Method not implemented.");
    }
    getReportsByMonth(year: number, month: number): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    getReportsByAge(age: number): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    getReportsByDriverId(driverId: bigint): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    getReportsByCarNumber(carNumber: bigint): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    getCanceledReports(): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    getCanceledReportsByCarNumber(carNumber: bigint): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    getNotPaidReportsByCarNumber(carNumber: bigint): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    
}

