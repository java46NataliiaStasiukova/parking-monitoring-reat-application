import React, { useEffect } from "react";
import { range } from "../../util/functions";
import { getRandomCar } from "../../util/randomCar";
import driverData from '../../config/driverData.json';
import parkingData from '../../config/parkingData.json';
import reportData from '../../config/reportData.json';
import { getRandomDriver } from "../../util/randomDriver";
import { getRandomReport } from "../../util/randomReport";
import { getRandomParkingZone } from "../../util/randomParkingZone";
import { useDispatch } from "react-redux";
import { addCar, addDriver, addParkingZone, addReport } from "../../redux/actions";
import { Box } from "@mui/material";

const options = ["cars", "drivers", "reports", "parkingZones"];
const INPUT_GENERATION_ID = "input-generation-id"
const SELECT_GENERATION_ID = "select-generation-id"
let inputAmount: any;
let inputOption: any;
const RandomGeneration: React.FC = () => {

    const dispatch = useDispatch();

    function onInput(){
        const amount: number = +inputAmount.value;
        const selectedOption: String = inputOption.value;
        switch(selectedOption) {
            case "cars": generateCars(amount); break;
            case "drivers": generateDrivers(amount); break;
            case "reports": generateReports(amount); break;
            case "parkingZones": generateParkingZones(amount); break;
            default: break;
        }
    }

    function generateCars(amount: number){
        range(0, amount).forEach(i => dispatch(addCar(getRandomCar(driverData))));
    }

    function generateDrivers(amount: number){
        range(0, amount).forEach(i => dispatch(addDriver(getRandomDriver(driverData))));
    }

    function generateReports(amount: number){
        range(0, amount).forEach(i => dispatch(addReport(getRandomReport(driverData, parkingData, reportData))));
    }

    function generateParkingZones(amount: number){
        range(0, amount).forEach(i => dispatch(addParkingZone(getRandomParkingZone(parkingData))));
    }

    useEffect(() => {
        inputAmount = document.getElementById(INPUT_GENERATION_ID);
        inputOption = document.getElementById(SELECT_GENERATION_ID);
    })

    return <>
    <Box sx={{paddingTop: '10vh'}}>Random Generation Page
        <input id={INPUT_GENERATION_ID} type="number" />
        <select id={SELECT_GENERATION_ID} name="destination">
        {options.map((o, i)=> <option value={o} key={i}>{o}</option>)}
          
        </select>
        <button onClick={onInput}>Generate</button>
    </Box>
    </>
}

export default RandomGeneration;