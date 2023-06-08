import ParkingService from "./ParkingService";
import { CarModel } from "../models/CarModel";
import { DriverModel } from "../models/DriverModel";
import { ReportModel } from "../models/ReportModel";
import { NotificationDataModel } from "../models/NotificationDataModel";
import { createNotificationData } from "../models/NotificationDataModel";

export default class ParkingServiceArrays implements ParkingService {

    cars: Map<number, CarModel> = new Map<number, CarModel>();
    drivers: Map<number, DriverModel> = new Map<number, DriverModel>();
    reports: Map<number, ReportModel> = new Map<number, ReportModel>();

    getAllCars(): CarModel[] {
        return Array.from(this.cars.values());
    }
    getAllDrivers(): DriverModel[] {
        return Array.from(this.drivers.values());
    }
    getAllReports(): ReportModel[] {
        return Array.from(this.reports.values());
    }

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
    updateCar(carNumber: number, driverId: number): String {
        let res = `car with number: ${carNumber} not exist`;
        let car = this.cars.get(carNumber);
        if(car !== undefined){
            car.driverId = driverId;
            this.cars.set(carNumber, car);
            res = `car with number: ${carNumber} was updated`;
        }
        return res;
    }
    updateDriver(driverId: number, email: String): String {
        let res = `driver with id: ${driverId} not exist`;
        let driver = this.drivers.get(driverId);
        if(driver !== undefined){
            driver.email = email;
            this.drivers.set(driverId, driver);
            res = `driver with id: ${driverId} was updated`;
        }
        return res;
    }
    updateReport(reportId: number, status: String): String {
        let res = `report with id: ${reportId} not exist`;
        let report = this.reports.get(reportId);
        if(report !== undefined){
            report.status = status;
            this.reports.set(reportId, report);
            res = `report with id: ${reportId} was updated`;
        }
        return res;
    }
    getCar(carNumber: number): CarModel | null{
        let res = null;
        let car = this.cars.get(carNumber);
        if(car !== undefined){
            res = car;
        }
        return res;
    }
    getDriver(driverId: number): DriverModel | null {
        let res = null;
        let driver = this.drivers.get(driverId);
        if(driver !== undefined){
            res = driver;
        }
        return res;
    }
    getReport(reportId: number): ReportModel | null {
        let res = null;
        let report = this.reports.get(reportId);
        if(report !== undefined){
            res = report
        }
        return res;
    }

    deleteCar(carNumber: number): String {
        let res = `car with number: ${carNumber} not exist`;
        let car = this.cars.get(carNumber);
        if(car !== undefined){
            this.cars.delete(carNumber);
            res = `car with number: ${carNumber} was removed`;
        }
        return res;
    }
    deleteDriver(driverId: number): String {
        let res = `driver with id: ${driverId} not exist`;
        let driver = this.drivers.get(driverId);
        if(driver !== undefined){
            this.drivers.delete(driverId);
            res = `driver with id: ${driverId} was removed`;
        }
        return res;
    }
    deleteReport(reportId: number): String {
        let res = `report with id: ${reportId} not exist`;
        let report = this.reports.get(reportId);
        if(report !== undefined){
            this.reports.delete(reportId);
            res = `report with id: ${reportId} was removed`;
        }
        return res;
    }
    getDriverByCarNumber(carNumber: number): String {
        let res = `driver for car: ${carNumber} not exist`;
        let car = this.cars.get(carNumber);
        if(car !== undefined){
            let driver = this.drivers.get(car.driverId);
            if(driver != undefined){
                res = `found driver: ${JSON.stringify(driver)}`;
            }
        }
        return res;
    }
    getReportsByMonth(year: number, month: number): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    getReportsByAge(age: number): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    getReportsByDriverId(driverId: number): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    getReportsByCarNumber(carNumber: number): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    getCanceledReports(): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    getCanceledReportsByCarNumber(carNumber: number): ReportModel[] {
        throw new Error("Method not implemented.");
    }
    getNotPaidReportsByCarNumber(carNumber: number): ReportModel[] {
        throw new Error("Method not implemented.");
    }

    getNotificationData(carNumber: number): NotificationDataModel | null{
        let res = null;
        let car = this.cars.get(carNumber);
        if(car !== undefined){
            let driver = this.drivers.get(car.driverId);
            if(driver != undefined){
                res = createNotificationData(carNumber, driver.email,
                    driver.name, driver.id);
            }
        }
        return res;
    }
    
}

