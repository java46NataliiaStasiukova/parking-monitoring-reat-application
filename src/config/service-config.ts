import { CarModel } from "../models/CarModel";
import { DriverModel } from "../models/DriverModel";
import { ReportModel } from "../models/ReportModel";
import ParkingServiceArrays from "../service/ParkingServiceArrays";

export const cars: CarModel[] = [];
export const drivers: DriverModel[] = [];
export const reports: ReportModel[] = [];
export const parkingService = new ParkingServiceArrays();
