import { CarModel } from "../models/CarModel";
import { DriverModel } from "../models/DriverModel";
import { ParkingZoneModel } from "../models/ParkingZoneModel";
import { ReportModel } from "../models/ReportModel";
import ParkingServiceArrays from "../service/ParkingServiceArrays";
import ParkingZonesServiceArray from "../service/ParkingZonesServiceArray";

// export const cars: CarModel[] = [];
// export const drivers: DriverModel[] = [];
// export const reports: ReportModel[] = [];
// export const zones: ParkingZoneModel[] = [];
export const parkingService = new ParkingServiceArrays();
export const parkingZonesService = new ParkingZonesServiceArray();
