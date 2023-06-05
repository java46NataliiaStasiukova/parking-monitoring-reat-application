import React from "react";

export type ReportModel = {
    id: number;
    carNumber: number;
    driverId: number;
    parkingZone: String;
    date: String;
    cost: number;
    status: String;
    driverName: String;
}

export function createReport(id: number, carNumber: number, 
    driverId: number, parkingZone: String, date: String, cost: number,
    status: String, driverName: String): ReportModel {
        return {id, carNumber, driverId, parkingZone, date, cost,
            status, driverName};
    }