import { useDispatch, useSelector } from "react-redux";
import { CarModel } from "../models/CarModel";
import { DriverModel } from "../models/DriverModel";
import { ParkingZoneModel } from "../models/ParkingZoneModel";
import { ReportModel } from "../models/ReportModel";
import { CarsStateType, DriversStateType, ParkingZonesType, ReportsStateType } from "../redux/store";
import { useEffect } from "react";
import { getRandomElement, getRandomNumber } from "./random";
import { ImitatorAction, ImitatorSubject, imitatorActions, imitatorSubjects } from "../config/imitator-config";
import { addCar, addDriver, addParkingZone, addReport, deleteCar, deleteDriver, deleteParkingZone, deleteReport, updateCar, updateDriver, updateParkingZone, updateReport } from "../redux/actions";
import { getRandomCar } from "./randomCar";
import driverData from "../config/driverData.json"
import reportData from "../config/reportData.json"
import parkingData from "../config/parkingData.json"
import { getRandomDriver } from "./randomDriver";
import { getRandomReport } from "./randomReport";
import { getRandomParkingZone } from "./randomParkingZone";



let cars: CarModel[];
let drivers: DriverModel[];
let reports: ReportModel[];
let zones: ParkingZoneModel[];

export function useImitator() {
    cars = useSelector<CarsStateType, CarModel[]>(state => state.cars);
    drivers = useSelector<DriversStateType, DriverModel[]>(state => state.drivers);
    reports = useSelector<ReportsStateType, ReportModel[]>(state => state.reports);
    zones = useSelector<ParkingZonesType, ParkingZoneModel[]>(state => state.zones);

    const dispatch = useDispatch();
    useEffect(() => {
        const intervalId = setInterval(action, 2000);
        return () => clearInterval(intervalId)
    }, []);


    function action(){
        const number = getRandomNumber(1, 100);
        console.log("probability: " + number);
        const imitatorAction: ImitatorAction = getAction(number);
        const imitatorSubject: ImitatorSubject = getSubject(number);
        switch(imitatorAction.action){
            case 'add': dispatchAdd(imitatorSubject.subject); break;
            case 'update': dispatchUpdate(imitatorSubject.subject); break;
            case 'remove': dispatchRemove(imitatorSubject.subject); break;
            default: break;
        }
    }

    function dispatchAdd(subject: String){
        console.log("adding " + subject);
        switch(subject){
            case 'car': dispatch(addCar(getRandomCar(driverData))); break;
            case 'driver': dispatch(addDriver(getRandomDriver(driverData))); break;
            case 'report': dispatch(addReport(getRandomReport(driverData, parkingData, reportData))); break;
            case 'zone': dispatch(addParkingZone(getRandomParkingZone(parkingData))); break;
            default: break;
        }
    }

    function dispatchUpdate(subject: String){
        console.log("updating " + subject);
        switch(subject) {
            case 'car': if(cars.length !== 0){
                const index = getRandomNumber(0, cars.length - 1);
                const carNumber = cars[index].carNumber;
                dispatch(updateCar(carNumber, getRandomNumber(driverData.minDriverId, driverData.maxDriverId)));
            }; break;
            case 'driver': if(cars.length !== 0) {
                const index = getRandomNumber(0, drivers.length - 1);
                const driver = drivers[index];
                dispatch(updateDriver(driver.id, `${driver.name}${getRandomNumber(0, 25)}@gmail.com`));
            } ;break;
            case 'report': if(reports.length !== 0) {
                const index = getRandomNumber(0, reports.length - 1);
                const reportId = reports[index].id;
                dispatch(updateReport(reportId, getRandomElement(reportData.status)));
            }; break;
            case 'zone': if(zones.length !== 0) {
                const index = getRandomNumber(0, zones.length - 1);
                const zone = getRandomParkingZone(parkingData);
                zone.parkingZone = zones[index].parkingZone;
                dispatch(updateParkingZone(zone));
            }; break;
            default: break;
        }
    }

    function dispatchRemove(subject: String){
        console.log("removing " + subject);
        switch(subject) {
            case 'car': if(cars.length !== 0) {
                const index = getRandomNumber(0, cars.length - 1);
                dispatch(deleteCar(cars[index].carNumber));
            }; break;
            case 'driver': if(drivers.length !== 0) {
                const index = getRandomNumber(0, drivers.length - 1);
                dispatch(deleteDriver(drivers[index].id));
            }; break;
            case 'report': if(reports.length !== 0) {
                const index = getRandomNumber(0, reports.length - 1);
                dispatch(deleteReport(reports[index].id));
            }; break;
            case 'zone': if(zones.length !== 0){
                const index = getRandomNumber(0, zones.length - 1);
                dispatch(deleteParkingZone(zones[index].parkingZone));
            }
        }
    }

}

function getAction(num: number): ImitatorAction {
    return imitatorActions.find(ia => num <= ia.prob) ?? imitatorActions[imitatorActions.length - 1];
}

function getSubject(num: number): ImitatorSubject {
    return imitatorSubjects.find(is => num <= is.prob) ?? imitatorSubjects[imitatorSubjects.length - 1];
}



