import React from "react";
import { parkingService } from "../../config/service-config";

const ReportsPage: React.FC = () => {


    return <>
    <div>
        <ul>{parkingService.getAllReports().map(c => <li key={c.id}>{JSON.stringify(c)}</li>)}</ul>
    </div>
    </>
}

export default ReportsPage;