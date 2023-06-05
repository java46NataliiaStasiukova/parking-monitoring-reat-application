import { CarModel } from "../models/CarModel";
import { DriverModel } from "../models/DriverModel";
import { ReportModel } from "../models/ReportModel";

export default interface ParkingService {

    getAllCars(): CarModel[];
    getAllDrivers(): DriverModel[];
    getAllReports(): ReportModel[];

    addCar(car: CarModel): CarModel | null;
    addDriver(driver: DriverModel): DriverModel | null;
    addReport(report: ReportModel): ReportModel | null;

    updateCar(carNumber: number, driverId: number): String;
    updateDriver(driverId: number, email: String): String;
    updateReport(reportId: number, status: String): String;

    getCar(carNumber: number): CarModel | null;
    getDriver(driverId: number): DriverModel | null;
    getReport(reportId: number): ReportModel | null;

    deleteCar(carNumber: number): String;
    deleteDriver(driverId: number): String;
    deleteReport(reportId: number): String;

    getDriverByCarNumber(carNumber: number): String;
    getReportsByMonth(year: number, month: number): ReportModel[];
    getReportsByAge(age: number): ReportModel[];
    getReportsByDriverId(driverId: number): ReportModel[];
    getReportsByCarNumber(carNumber: number): ReportModel[];
    getCanceledReports(): ReportModel[];
    getCanceledReportsByCarNumber(carNumber: number): ReportModel[];
    getNotPaidReportsByCarNumber(carNumber: number): ReportModel[];

}