import React from "react";

export type CarModel = {
    carNumber: number;
    driverId: number;
}

export function createCar(carNumber: number, driverId: number): CarModel{
    return {carNumber, driverId};
}