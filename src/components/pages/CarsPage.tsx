import React from "react";
import { parkingService } from "../../config/service-config";

const CarsPage: React.FC = () => {
    
    return <div>
        <ul>
            {parkingService.getAllCars().map(c => <li key={c.carNumber}>{JSON.stringify(c)}</li>)}
        </ul>
    </div>
    
}

export default CarsPage;