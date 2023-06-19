import React from "react";
import { useDispatch } from "react-redux";
import { DriverModel } from "../../models/DriverModel";
import { addDriver } from "../../redux/actions";
import DriverForm from "../forms/DriverForm";


const AddDriverPage: React.FC = () => {
    const dispatch = useDispatch();
    function onSubmit(driver: DriverModel){
        console.log(`adding driver: ${driver}`);
        dispatch(addDriver(driver));
    }
    return <>
        <DriverForm submitFn={onSubmit}></DriverForm>
    </>
    
}

export default AddDriverPage;