import React from "react";
import { parkingService } from "../../config/service-config";

const DriversPage: React.FC = () => {


    return <>
    <div>
        <ul>{parkingService.getAllDrivers().map(c => <li key={c.id}>{JSON.stringify(c)}</li>)}</ul>
    </div>
    </>
}

export default DriversPage;