import React from "react";
import { useSelector } from "react-redux";
import { DriversStateType } from "../../redux/store";
import { DriverModel } from "../../models/DriverModel";

const DriversPage: React.FC = () => {
    const drivers: DriverModel[] = useSelector<DriversStateType, DriverModel[]>(state => state.drivers);
    return <>
    <div>
        <ul>{drivers.map(c => <li key={c.id}>{JSON.stringify(c)}</li>)}</ul>
    </div>
    </>
}

export default DriversPage;