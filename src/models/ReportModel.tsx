import React from "react";

export type ReportModel = {
    id: bigint;
    carNumber: bigint;
    driverId: bigint;
    parkingZone: String;
    date: String;
    cost: number;
    status: String;
    driverName: String;
}