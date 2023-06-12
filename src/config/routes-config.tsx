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
import { Provider } from "react-redux";
import { store } from "../redux/store";



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
    {path: HOME_PAGE_PATH, label: 'Home Page', element: <Provider store={store}> <HomePage/> </Provider>},
    {path: CARS_PATH, label: 'Cars', element: <Provider store={store}><CarsPage/></Provider> },
    {path: DRIVERS_PATH, label: 'Drivers', element: <Provider store={store}><DriversPage/></Provider>},
    {path: REPORTS_PATH, label: 'Reports', element: <Provider store={store}><ReportsPage/></Provider>},
    {path: PARKING_ZONES, label: 'ParkingZones', element: <Provider store={store}><ParkingZonePage/></Provider>},
    {path: RANDOM_GENERATION, label: 'RandomGeneration', element: <Provider store={store}><RandomGeneration/></Provider>},
    {path: LOGIN_PATH, label: 'Login', element: <LoginPage/>},
    {path: LOGOUT_PATH, label: 'Logout', element: <LogoutPage/>},
    {path: ERROR_PATH, label: '', element: <ErrorPage/>}
]