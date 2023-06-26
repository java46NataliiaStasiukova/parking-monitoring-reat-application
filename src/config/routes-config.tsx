import CarsPage from "../components/pages/CarsPage";
import ErrorPage from "../components/pages/ErrorPage";
import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/LoginPage";
import LogoutPage from "../components/pages/LogoutPage";
import RandomGeneration from "../components/pages/RandomGeneration";
import DriversPage from "../components/pages/DriversPage";
import ReportsPage from "../components/pages/ReportsPage";
import ParkingZonePage from "../components/pages/ParkingZonePage";

import PangoPage from "../components/pages/PangoPage";
import AccountsPage from "../components/pages/AccountsPage";
import SignInPage from "../components/pages/SignInPage";
import MyProfilePage from "../components/pages/MyProfilePage";
import UpdateProfilePage from "../components/pages/UpdateProfilePage";
import FindParkingDataPage from "../components/pages/FindParkingDataPage";
import FindAccountsPage from "../components/pages/FindAccountsPage";
import { NestedRouteTypes } from "../models/NestedRouteTypes";



export const HOME_PAGE_PATH = '/home';

export const MY_PROFILE_PATH = '/profile';
export const UPDATE_PROFILE_PATH = '/profile/update';
export const PROFILE_REPORTS_PATH = '/profile/reports'

export const PANGO_PAGE_PATH = '/pango';

export const ACCOUNTS_PATH = '/accounts';
export const FIND_ACCOUNT_PATH = 'accounts/find';

export const FIND_PARKING_DATA_PATH = '/parking';
export const CARS_PATH ='/parking/cars';
export const DRIVERS_PATH = '/parking/drivers';
export const REPORTS_PATH = '/parking/reports';

export const PARKING_ZONES = '/zones';
export const RANDOM_GENERATION = '/random-generation';
export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';
export const SIGN_IN_PATH = '/signin';
export const ERROR_PATH = '*';



export const NESTED_ROUTES:NestedRouteTypes[] = [
    {path: HOME_PAGE_PATH, label: 'Home Page', element:<HomePage/>},
    {path: MY_PROFILE_PATH, label: 'My Profile >', element: <MyProfilePage/>, nestedItems: [
        {path: PROFILE_REPORTS_PATH, label: 'My Profile Reports', element: <MyProfilePage/>},
        {path: UPDATE_PROFILE_PATH, label: 'Update Profile', element: <UpdateProfilePage/>}
    ]},
    {path: PANGO_PAGE_PATH, label: 'Pango Service', element: <PangoPage/>},
    {path: ACCOUNTS_PATH, label: 'Accounts >', element: <AccountsPage/>, nestedItems: [
        {path: ACCOUNTS_PATH, label: 'Accounts', element: <AccountsPage/>},
        {path: FIND_ACCOUNT_PATH, label: 'Find Accounts', element: <FindAccountsPage/>}
    ]},
    {path: FIND_PARKING_DATA_PATH , label: 'Find', element: <FindParkingDataPage/>, nestedItems: [
        {path: FIND_PARKING_DATA_PATH, label: 'Find', element: <FindParkingDataPage/>},
        {path: CARS_PATH, label: 'Cars', element: <CarsPage/>},
        {path: DRIVERS_PATH, label: 'Drivers', element: <DriversPage/>},
        {path: REPORTS_PATH, label: 'Reports', element: <ReportsPage/>},
    ]},
    {path: PARKING_ZONES, label: 'Parking Zones', element: <ParkingZonePage/>},
    {path: RANDOM_GENERATION, label: 'Random Generation', element: <RandomGeneration/>},
    {path: LOGIN_PATH, label: 'Login', element: <LoginPage/>},
    {path: LOGOUT_PATH, label: 'Logout', element: <LogoutPage/>},
    {path: SIGN_IN_PATH, label: 'Sign In', element: <SignInPage/>},
    {path: ERROR_PATH, label: '', element: <ErrorPage/>}
]
