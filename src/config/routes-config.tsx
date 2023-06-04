import { RouteType } from "../models/RouteTypes";
import CarsPage from "../components/pages/CarsPage";
import ErrorPage from "../components/pages/ErrorPage";
import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/LoginPage";
import LogoutPage from "../components/pages/LogoutPage";


export const HOME_PAGE_PATH = '/';
export const CARS_PATH ='/cars';
export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';
export const ERROR_PATH = '*';

export const ROUTES:RouteType[] = [
    {path: HOME_PAGE_PATH, label: 'Home Page', element: <HomePage/>},
    {path: CARS_PATH, label: 'Cars', element: <CarsPage/>},
    {path: LOGIN_PATH, label: 'Login', element: <LoginPage/>},
    {path: LOGOUT_PATH, label: 'Logout', element: <LogoutPage/>},
    {path: ERROR_PATH, label: '', element: <ErrorPage/>}
]