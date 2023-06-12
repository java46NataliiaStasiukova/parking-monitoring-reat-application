import React from "react";
import { useSelector } from "react-redux";
import { CarModel } from "../../models/CarModel";
import { CarsStateType } from "../../redux/store";


const CarsPage: React.FC = () => {

    const cars: CarModel[] = useSelector<CarsStateType, CarModel[]>(state => state.cars);
    
    return <div>
        <ul>
            {cars.map(c => <li key={c.carNumber}>{JSON.stringify(c)}</li>)}
        </ul>
    </div>
    
}

export default CarsPage;