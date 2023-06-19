import { RouteTypes } from "../models/RouteTypes";
import CarsPage from "../components/pages/CarsPage";
import ErrorPage from "../components/pages/ErrorPage";
import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/LoginPage";
import LogoutPage from "../components/pages/LogoutPage";
import RandomGeneration from "../components/pages/RandomGeneration";
import DriversPage from "../components/pages/DriversPage";
import ReportsPage from "../components/pages/ReportsPage";
import ParkingZonePage from "../components/pages/ParkingZonePage";
import AddCarPage from "../components/pages/AddCarPage";
import AddDriverPage from "../components/pages/AddDriverPage";
import AddReportPage from "../components/pages/AddReportPage";
import AddParkingZonePage from "../components/pages/AddParkingZonePage";



export const HOME_PAGE_PATH = '/';
export const CARS_PATH ='/cars';

export const ADD_CAR_PATH = '/addcar';
export const ADD_DRIVER_PATH = '/adddriver';
export const ADD_REPORT_PATH = '/addreport';
export const ADD_PARKING_ZONE_PATH = '/addzone';

export const DRIVERS_PATH = '/drivers';
export const REPORTS_PATH = '/reports';
export const PARKING_ZONES = '/zones';
export const RANDOM_GENERATION = '/random-generation';
export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';
export const ERROR_PATH = '*';

export const ROUTES:RouteTypes[] = [
    {path: HOME_PAGE_PATH, label: 'Home Page', element:<HomePage/>},
    {path: CARS_PATH, label: 'Cars', element: <CarsPage/>},

    {path: ADD_CAR_PATH, label: 'Add Car', element: <AddCarPage/>},
    {path: ADD_DRIVER_PATH, label: 'Add Driver', element: <AddDriverPage/>},
    {path: ADD_REPORT_PATH, label: 'Add Report', element: <AddReportPage/>},
    {path: ADD_PARKING_ZONE_PATH, label: 'Add Zone', element: <AddParkingZonePage/>},


    {path: DRIVERS_PATH, label: 'Drivers', element: <DriversPage/>},
    {path: REPORTS_PATH, label: 'Reports', element: <ReportsPage/>},
    {path: PARKING_ZONES, label: 'ParkingZones', element: <ParkingZonePage/>},
    {path: RANDOM_GENERATION, label: 'RandomGeneration', element: <RandomGeneration/>},
    {path: LOGIN_PATH, label: 'Login', element: <LoginPage/>},
    {path: LOGOUT_PATH, label: 'Logout', element: <LogoutPage/>},
    {path: ERROR_PATH, label: '', element: <ErrorPage/>}
]