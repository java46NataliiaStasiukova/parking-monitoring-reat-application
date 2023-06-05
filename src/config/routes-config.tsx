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



export const HOME_PAGE_PATH = '/';
export const CARS_PATH ='/cars';
export const DRIVERS_PATH = '/drivers';
export const REPORTS_PATH = '/reports';
export const PARKING_ZONES = '/zones';
export const RANDOM_GENERATION = '/random-generation';
export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';
export const ERROR_PATH = '*';

export const ROUTES:RouteTypes[] = [
    {path: HOME_PAGE_PATH, label: 'Home Page', element: <HomePage/>},
    {path: CARS_PATH, label: 'Cars', element: <CarsPage/>},
    {path: DRIVERS_PATH, label: 'Drivers', element: <DriversPage/>},
    {path: REPORTS_PATH, label: 'Reports', element: <ReportsPage/>},
    {path: PARKING_ZONES, label: 'ParkingZones', element: <ParkingZonePage/>},
    {path: RANDOM_GENERATION, label: 'RandomGeneration', element: <RandomGeneration/>},
    {path: LOGIN_PATH, label: 'Login', element: <LoginPage/>},
    {path: LOGOUT_PATH, label: 'Logout', element: <LogoutPage/>},
    {path: ERROR_PATH, label: '', element: <ErrorPage/>}
]