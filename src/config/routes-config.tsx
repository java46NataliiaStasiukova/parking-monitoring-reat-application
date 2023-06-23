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
import PangoPage from "../components/pages/PangoPage";
import AccountsPage from "../components/pages/AccountsPage";
import SignInPage from "../components/pages/SignInPage";
import MyProfilePage from "../components/pages/MyProfilePage";
import UpdateProfilePage from "../components/pages/UpdateProfilePage";
import FindParkingDataPage from "../components/pages/FindParkingDataPage";
import FindAccountsPage from "../components/pages/FindAccountsPage";
import StatisticsPage from "../components/pages/StatisticsPage";



export const HOME_PAGE_PATH = '/';
export const PANGO_PAGE_PATH = '/pango';
export const ACCOUNTS_PATH = '/accounts';
export const FIND_ACCOUNT_PATH = 'accounts/find';
export const STATISTICS_PATH = 'statistics';
// export const ADD_CAR_PATH = '/addcar';
// export const ADD_DRIVER_PATH = '/adddriver';
// export const ADD_REPORT_PATH = '/addreport';
// export const ADD_PARKING_ZONE_PATH = '/addzone';
export const CARS_PATH ='/cars';
export const DRIVERS_PATH = '/drivers';
export const REPORTS_PATH = '/reports';
export const FIND_PARKING_DATA_PATH = '/parking-data';

export const PARKING_ZONES = '/zones';
export const RANDOM_GENERATION = '/random-generation';
export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';
export const SIGN_IN_PATH = '/signin';
export const ERROR_PATH = '*';

export const MY_PROFILE_PATH = '/profile';
export const UPDATE_PROFILE_PATH = '/profile/update';

export const ROUTES:RouteTypes[] = [
    {path: HOME_PAGE_PATH, label: 'Home Page', element:<HomePage/>},
    {path: PANGO_PAGE_PATH, label: 'Pango Service', element: <PangoPage/>},
    {path: ACCOUNTS_PATH, label: 'Accounts', element: <AccountsPage/>},
    {path: STATISTICS_PATH, label: 'Statistics', element: <StatisticsPage/>},
    // {path: ADD_CAR_PATH, label: 'Add Car', element: <AddCarPage/>},
    // {path: ADD_DRIVER_PATH, label: 'Add Driver', element: <AddDriverPage/>},
    // {path: ADD_REPORT_PATH, label: 'Add Report', element: <AddReportPage/>},
    // {path: ADD_PARKING_ZONE_PATH, label: 'Add Zone', element: <AddParkingZonePage/>},
    {path: PARKING_ZONES, label: 'Parking Zones', element: <ParkingZonePage/>},
    {path: RANDOM_GENERATION, label: 'Random Generation', element: <RandomGeneration/>},
    {path: LOGIN_PATH, label: 'Login', element: <LoginPage/>},
    {path: LOGOUT_PATH, label: 'Logout', element: <LogoutPage/>},
    {path: SIGN_IN_PATH, label: 'Sign In', element: <SignInPage/>},
    {path: ERROR_PATH, label: '', element: <ErrorPage/>}
]

export const HOME_PAGE_ROUTES:RouteTypes[] = [
    {path: MY_PROFILE_PATH, label: 'My Profile', element: <MyProfilePage/>},
    {path: UPDATE_PROFILE_PATH, label: 'Update Profile', element: <UpdateProfilePage/>}
]

export const STATISTICS_ROUTES:RouteTypes[] = [
    {path: CARS_PATH, label: 'Cars', element: <CarsPage/>},
    {path: DRIVERS_PATH, label: 'Drivers', element: <DriversPage/>},
    {path: REPORTS_PATH, label: 'Reports', element: <ReportsPage/>},
    {path: FIND_PARKING_DATA_PATH, label: 'Find', element: <FindParkingDataPage/>}
]

export const ACCOUNTS_ROUTES:RouteTypes[] = [
    {path: ACCOUNTS_PATH, label: 'Accounts', element: <AccountsPage/>},
    {path: FIND_ACCOUNT_PATH, label: 'Find Accounts', element: <FindAccountsPage/>}
]
