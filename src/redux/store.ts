import { combineReducers } from "redux";
import { CarModel } from "../models/CarModel";
import { carsReducer, driversReducer, parkingReducer, reportsReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { DriverModel } from "../models/DriverModel";
import { ReportModel } from "../models/ReportModel";
import { ParkingZoneModel } from "../models/ParkingZoneModel";

export type CarsStateType = {
    cars: CarModel[];
};
export type DriversStateType = {
    drivers: DriverModel[];
};
export type ReportsStateType = {
    reports: ReportModel[];
};
export type ParkingZonesType = {
    zones: ParkingZoneModel[];
};

const reducer = combineReducers<CarsStateType | DriversStateType | ReportsStateType | ParkingZonesType>({
    cars: carsReducer as any,
    drivers: driversReducer as any,
    reports: reportsReducer as any,
    zones: parkingReducer as any
});

export const store = configureStore({reducer});