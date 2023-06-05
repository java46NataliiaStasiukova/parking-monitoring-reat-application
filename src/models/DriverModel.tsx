import React from "react";

export type DriverModel = {
    id: number;
    name: String;
    email: String;
    birthdate: String;
}

export function createDriver(id: number, name: String, email: String, birthdate: String): DriverModel {
    return {id, name, email, birthdate};
}