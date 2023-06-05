import React from "react";

export type ParkingZoneModel = {
    parkingZone: String;
    fineCost: number;
    city: String;
    address: String;
}

export function createParkingZone(parkingZone: String, fineCost: number,
    city: String, address: String): ParkingZoneModel {
        return {parkingZone, fineCost, city, address};
    }