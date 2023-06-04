import React from "react";
import CarScanImitator from "../../util/CarScanImitator";
import CarScan from "../../models/CarScan";

const CarsPage: React.FC = () => {

    const imitator: CarScanImitator = new CarScanImitator();

    const [cars, setCars] = React.useState<CarScan[]>([]);

    const getCarsList = () => {
       // const tmp = imitator.getCars().map(c => <li >{JSON.stringify(c)}</li>)
       //console.log(typeof(tmp))
        setCars(imitator.getCars());
    }

    return <div>
        <button onClick={getCarsList}>Get new cars scan</button>
        <ul>{cars.map(c => <li key={c.getSequenceNumber()}>{JSON.stringify(c)}</li>)}</ul>
    </div>
    
}

export default CarsPage;