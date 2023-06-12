import { Reducer } from "react";
import { CarModel } from "../models/CarModel";
import { PayloadAction } from "@reduxjs/toolkit";
import { DriverModel } from "../models/DriverModel";
import { ReportModel } from "../models/ReportModel";
import { parkingService, parkingZonesService } from "../config/service-config";
import { ADD_CAR_ACTION, ADD_DRIVER_ACTION, ADD_REPORT_ACTION, ADD_PARKING_ZONE_ACTION, UPDATE_CAR_ACTION, UPDATE_DRIVER_ACTION, UPDATE_REPORT_ACTION, UPDATE_PARKING_ZONE_ACTION, GET_CAR_ACTION, GET_DRIVER_ACTION, GET_REPORT_ACTION, GET_PARKING_ZONE_ACTION, DELETE_CAR_ACTION, DELETE_DRIVER_ACTION, DELETE_REPORT_ACTION, DELETE_PARKING_ZONE_ACTION, GET_DRIVER_BY_CAR_NUMBER_ACTION, GET_REPORT_BY_MONTH_ACTION, GET_REPORTS_BY_AGE_ACTION, GET_REPORTS_BY_DRIVER_ID_ACTION, GET_REPORTS_BY_CAR_NUMBER_ACTION, GET_CANCELED_REPORTS_ACTION, GET_CANCELED_REPORTS_BY_CAR_NUMBER_ACTION, GET_NOT_PAID_REPORTS_BY_CAR_NUMBER_ACTION, GET_NOTIFICATION_DATA_ACTION } from "./actions";
import { ParkingZoneModel } from "../models/ParkingZoneModel";

export const carsReducer:Reducer<CarModel[], PayloadAction<CarModel | number>> =
    (cars = [], action):  CarModel[] => {
        switch(action.type) {
            case ADD_CAR_ACTION: parkingService.addCar(action.payload as CarModel); break;
            case UPDATE_CAR_ACTION:
                const { carNumber, driverId } = action.payload as { carNumber: number; driverId: number };
                parkingService.updateCar(carNumber, driverId);break;
            case GET_CAR_ACTION: parkingService.getCar(action.payload as number); break;
            case DELETE_CAR_ACTION: parkingService.deleteCar(action.payload as number); break;
            default: return cars;
        }
        return parkingService.getAllCars();
    }
export const driversReducer:Reducer<DriverModel[], PayloadAction<DriverModel | number | String>> = 
    (drivers = [], action): DriverModel[] => {
        switch(action.type) {
            case ADD_DRIVER_ACTION: parkingService.addDriver(action.payload as DriverModel); break;
            case UPDATE_DRIVER_ACTION: 
                const { id, email } = action.payload as { id: number; email: String };
                parkingService.updateDriver(id, email); break;
            case GET_DRIVER_ACTION: parkingService.getDriver(action.payload as number); break;
            case DELETE_DRIVER_ACTION: parkingService.deleteDriver(action.payload as number); break;
            case GET_DRIVER_BY_CAR_NUMBER_ACTION: parkingService.getDriverByCarNumber(action.payload as number); break;
            case GET_NOTIFICATION_DATA_ACTION: parkingService.getNotificationData(action.payload as number); break;
            default: return drivers;
        }
        return parkingService.getAllDrivers();
    }
export const reportsReducer:Reducer<ReportModel[], PayloadAction<ReportModel | number | String>> = 
    (reports = [], action): ReportModel[] => {
        switch(action.type) {
            case ADD_REPORT_ACTION: parkingService.addReport(action.payload as ReportModel); break;
            case UPDATE_REPORT_ACTION: 
                const {id, status} = action.payload as {id: number; status: String};
                parkingService.updateReport(id, status); break;
            case GET_REPORT_ACTION: parkingService.getReport(action.payload as number); break;
            case DELETE_REPORT_ACTION: parkingService.deleteReport(action.payload as number); break;
            //TOFIX: as unknown
            case GET_REPORT_BY_MONTH_ACTION: 
                const {year, month} = action.payload as unknown as {year: number; month: number};
                parkingService.getReportsByMonth(year, month); break;
                //parkingService.getReportsByMonth(action.payload as {year: number; month: number}); break;
            case GET_REPORTS_BY_AGE_ACTION: parkingService.getReportsByAge(action.payload as number); break;
            case GET_REPORTS_BY_DRIVER_ID_ACTION: parkingService.getReportsByDriverId(action.payload as number); break;
            case GET_REPORTS_BY_CAR_NUMBER_ACTION: parkingService.getReportsByCarNumber(action.payload as number); break;
            case GET_CANCELED_REPORTS_ACTION: parkingService.getCanceledReports(); break;
            case GET_CANCELED_REPORTS_BY_CAR_NUMBER_ACTION: parkingService.getCanceledReportsByCarNumber(action.payload as number); break;
            case GET_NOT_PAID_REPORTS_BY_CAR_NUMBER_ACTION: parkingService.getNotPaidReportsByCarNumber(action.payload as number); break;
            default: return reports;
        }
        return parkingService.getAllReports();
       

    }

export const parkingReducer:Reducer<ParkingZoneModel[], PayloadAction<ParkingZoneModel | number | String>> = 
    (zones = [], action): ParkingZoneModel[] => {
        switch(action.type) {
            case ADD_PARKING_ZONE_ACTION: parkingZonesService.addParkingZone(action.payload as ParkingZoneModel); break;
            case UPDATE_PARKING_ZONE_ACTION: parkingZonesService.updateParkingZone(action.payload as ParkingZoneModel); break;
            case GET_PARKING_ZONE_ACTION: parkingZonesService.getParkingZone(action.payload as String); break;
            case DELETE_PARKING_ZONE_ACTION: parkingZonesService.deleteParkingZone(action.payload as String); break;
            default: return zones;
        }
        return parkingZonesService.getAllParkingZones();
    } 


